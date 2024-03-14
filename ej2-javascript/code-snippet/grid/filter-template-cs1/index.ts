import { Grid, Filter, parentsUntil, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, MultiSelect, ComboBox } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { Predicate, Query,DataUtil, DataManager, } from '@syncfusion/ej2-data';

Grid.Inject(Filter, Page);

let pageSettings = { pageCount: 5 };
let orderidrules = { required: true };
let shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
let shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);

let dropdown;
let numElement;
let dateElement;
let comboElement;
let multiSelectElement;

let templateOptionsDropDown = {
    create: () => {
        dropdown = document.createElement('select');
        dropdown.id = 'CustomerID';
        let option = document.createElement('option');
        option.value = 'All';
        option.innerText = 'All';
        dropdown.appendChild(option);
        data.forEach((item) => {
            let option = document.createElement('option');
            option.value = (item as ItemType).CustomerID;
            option.innerText = (item as ItemType).CustomerID;
            dropdown.appendChild(option);
        });
        return dropdown;
    },
    write: () => {
        let dropdownlist = new DropDownList({
            change: (args) => {
                if (args.value !== 'All') {
                    grid.filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
                } else {
                    grid.removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
                }
            }
        });
        dropdownlist.appendTo(dropdown);
    },
};

let templateOptionsNumericTextBox = {
    create: () => {
        numElement = document.createElement('input');
        return numElement;
    },
    write: () => {
        let numericTextBox = new NumericTextBox({
            format: '00.00',
            value: 10,
        });
        numericTextBox.appendTo(numElement);
    },
};

let templateOptionsDatePicker = {
    create: () => {
        dateElement = document.createElement('input');
        return dateElement;
    },
    write: (args) => {
        let datePickerObj = new DatePicker({
            value: new Date(args.column.field),
            change: handleFilterChange,
        });
        datePickerObj.appendTo(dateElement);
    },
};

let templateOptionsComboBox = {
    create: () => {
        comboElement = document.createElement('input');
        comboElement.id = 'ShipCity';
        return comboElement;
    },
    write: (args) => {
        let comboBox = new ComboBox({
            value: args.value,
            placeholder: 'Select a city',
            change: handleFilterChange,
            dataSource: shipCityDistinctData.map((item) => (item as ItemType).ShipCity),
        });
        comboBox.appendTo(comboElement);
    },
};

let templateOptionsMultiSelect = {
    create: () => {
        multiSelectElement = document.createElement('input');
        multiSelectElement.id = 'ShipCountry';
        return multiSelectElement;
    },
    write: (args) => {
        let multiselect = new MultiSelect({
            value: args.value,
            placeholder: 'Select a country',
            change: multiselectFunction,
            dataSource: shipCountryDistinctData.map((item) => (item as ItemType).ShipCountry),
        });
        multiselect.appendTo(multiSelectElement);
    },
};

let handleFilterChange = (args) => {
    let targetElement = parentsUntil(args.element, 'e-filtertext');
    let columnName = targetElement.id.replace('_filterBarcell', '');
    if (args.value) {
        grid.filterByColumn(columnName, 'equal', args.value);
    } else {
        grid.removeFilteredColsByField(columnName);
    }
};

let multiselectFunction = (args) => {
    let selectedValues = args.value;
    if (selectedValues.length === 0) {
        let OrginalData = new DataManager(data).executeLocal(new Query());
        grid.dataSource = OrginalData;
    } else {
        let predicate = [];
        for (let x = 0; x < selectedValues.length; x++) {
            predicate = predicate.length === 0 ? new Predicate('ShipCountry', 'equal', selectedValues[x]) : predicate.or('ShipCountry', 'equal', selectedValues[x]);
        }
        let filteredData = new DataManager(data).executeLocal(new Query().where(predicate));
        grid.dataSource = filteredData;
    }
};

let grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: pageSettings,
    height: 315,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right', isPrimaryKey: true, validationRules: orderidrules },
        { field: 'CustomerID', headerText: 'Customer ID', width: '120', textAlign: 'Right', filterBarTemplate: templateOptionsDropDown },
        { field: 'Freight', headerText: 'Freight', width: '100', format: 'C2', textAlign: 'Right', filterBarTemplate: templateOptionsNumericTextBox },
        { field: 'OrderDate', headerText: 'Order Date', width: '120', format: 'yMd', type: 'date', filterBarTemplate: templateOptionsDatePicker },
        { field: 'ShipCity', headerText: 'Ship City', width: '120',  filterBarTemplate: templateOptionsComboBox },
        { field: 'ShipCountry', headerText: 'Ship Country', width: '120', filterBarTemplate: templateOptionsMultiSelect }
    ]
});
grid.appendTo('#Grid');

interface ItemType {
    CustomerID: string,
    ShipCity: string,
    ShipCountry: string
}
