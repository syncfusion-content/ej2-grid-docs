var pageSettings = { pageCount: 5 };
var orderidrules = { required: true };
var shipCityDistinctData = ej.data.DataUtil.distinct(data, 'ShipCity', true);
var shipCountryDistinctData = ej.data.DataUtil.distinct(data, 'ShipCountry', true);

var dropdown;
var numElement;
var dateElement;
var comboElement;
var multiSelectElement;

var templateOptionsDropDown = {
    create: () => {
        dropdown = document.createElement('select');
        dropdown.id = 'CustomerID';
        var option = document.createElement('option');
        option.value = 'All';
        option.innerText = 'All';
        dropdown.appendChild(option);
        data.forEach((item) => {
            var option = document.createElement('option');
            option.value = item.CustomerID;
            option.innerText = item.CustomerID;
            dropdown.appendChild(option);
        });
        return dropdown;
    },
    write: () => {
        var dropdownlist = new ej.dropdowns.DropDownList({
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

var templateOptionsNumericTextBox = {
    create: () => {
        numElement = document.createElement('input');
        return numElement;
    },
    write: () => {
        var numericTextBox = new ej.inputs.NumericTextBox({
            format: '00.00',
            value: 10,
        });
        numericTextBox.appendTo(numElement);
    },
};

var templateOptionsDatePicker = {
    create: () => {
        dateElement = document.createElement('input');
        return dateElement;
    },
    write: (args) => {
        var datePickerObj = new ej.calendars.DatePicker({
            value: new Date(args.column.field),
            change: handleFilterChange,
        });
        datePickerObj.appendTo(dateElement);
    },
};

var templateOptionsComboBox = {
    create: () => {
        comboElement = document.createElement('input');
        comboElement.id = 'ShipCity';
        return comboElement;
    },
    write: (args) => {
        var comboBox = new ej.dropdowns.ComboBox({
            value: args.value,
            placeholder: 'Select a city',
            change: handleFilterChange,
            dataSource: shipCityDistinctData.map((item) => item.ShipCity),
        });
        comboBox.appendTo(comboElement);
    },
};

var templateOptionsMultiSelect = {
    create: () => {
        multiSelectElement = document.createElement('input');
        multiSelectElement.id = 'ShipCountry';
        return multiSelectElement;
    },
    write: (args) => {
        var multiselect = new ej.dropdowns.MultiSelect({
            value: args.value,
            placeholder: 'Select a country',
            change: multiselectFunction,
            dataSource: shipCountryDistinctData.map((item) => item.ShipCountry),
        });
        multiselect.appendTo(multiSelectElement);
    },
};

var handleFilterChange = (args) => {
    var targetElement = ej.grids.parentsUntil(args.element, 'e-filtertext');
    var columnName = targetElement.id.replace('_filterBarcell', '');
    if (args.value) {
        grid.filterByColumn(columnName, 'equal', args.value);
    } else {
        grid.removeFilteredColsByField(columnName);
    }
};

var multiselectFunction = (args) => {
    var selectedValues = args.value;
    if (selectedValues.length === 0) {
        var OrginalData = new ej.data.DataManager(data).executeLocal(new ej.data.Query());
        grid.dataSource = OrginalData;
    } else {
        var predicate = [];
        for (var x = 0; x < selectedValues.length; x++) {
            predicate = predicate.length === 0 ? new ej.data.Predicate('ShipCountry', 'equal', selectedValues[x]) : predicate.or('ShipCountry', 'equal', selectedValues[x]);
        }
        var filteredData = new ej.data.DataManager(data).executeLocal(new ej.data.Query().where(predicate));
        grid.dataSource = filteredData;
    }
};

var grid = new ej.grids.Grid({
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