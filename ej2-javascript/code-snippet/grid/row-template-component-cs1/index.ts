import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ChipList } from '@syncfusion/ej2-buttons';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    rowTemplate: '#rowtemplate',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120 },
        { field: 'Quantity', headerText: 'Quantity', width: 170 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120 },
        { field: 'OrderStatus', headerText: 'Order Status', width: 120 },
    ],

    dataBound: (args) => {

        let gridInstance = (document.getElementById('Grid') as any).ej2_instances[0];

        let chipList = gridInstance.getContentTable().querySelectorAll('.chipList');
        for (let i = 0; i < chipList.length; i++) {
            let chipValue  = chipList[i].innerText;
            new ChipList({ chips: [chipValue] }, chipList[i]);
        }

        let NumericList = gridInstance.getContentTable().querySelectorAll('.numeric');
        for (let i = 0; i < NumericList.length; i++) {
            let numeric: NumericTextBox = new NumericTextBox({});
            numeric.appendTo(NumericList[i]);
        }

        let dateList = gridInstance.getContentTable().querySelectorAll('.date-input');
        for (let i = 0; i < dateList.length; i++) {
            let dateInput = dateList[i];
            let dateValue = dateInput.value;
            let datepickerObject: DatePicker = new DatePicker({
                value: new Date(dateValue),
            });
            datepickerObject.appendTo(dateInput);
        }
        
        let dropdownList = gridInstance.getContentTable().querySelectorAll('.dropdownlist-input');
        for (let i = 0; i < dropdownList.length; i++) {
            let dropdownInputValue = dropdownList[i];
            let dropData = ['Processing', 'Order Placed', 'Delivered'];
            let dropdown = new DropDownList({
                dataSource: dropData,
                value: dropdownList[i].value,
                popupHeight: 150,
                popupWidth: 150
            });
            dropdown.appendTo(dropdownInputValue);
        }
    },
});
grid.appendTo('#Grid');