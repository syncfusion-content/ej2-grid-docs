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
        { field: 'ShipAddress', headerText: 'ShipAddress', width: 170 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120 },
        { field: 'OrderStatus', headerText: 'Order Status', width: 120 },
    ],

    dataBound: (args) => {

        var gridInstance = (document.getElementById('Grid') as any).ej2_instances[0];

        var chipList = gridInstance.getContentTable().querySelectorAll('.chipList');
        for (var i = 0; i < chipList.length; i++) {
            var chipValue  = chipList[i].innerText;
            new ChipList({ chips: [chipValue] }, chipList[i]);
        }

        var NumericList = gridInstance.getContentTable().querySelectorAll('.numeric');
        for (var i = 0; i < NumericList.length; i++) {
            let numeric: NumericTextBox = new NumericTextBox({});
            numeric.appendTo(NumericList[i]);
        }

        var dateList = gridInstance.getContentTable().querySelectorAll('.date-input');
        for (var i = 0; i < dateList.length; i++) {
            var dateInput = dateList[i];
            var dateValue = dateInput.value;
            let datepickerObject: DatePicker = new DatePicker({
                value: new Date(dateValue),
            });
            datepickerObject.appendTo(dateInput);
        }
        
        var dropdownList = gridInstance.getContentTable().querySelectorAll('.dropdownlist-input');
        for (var i = 0; i < dropdownList.length; i++) {
            var dropdownInputValue = dropdownList[i];
            var dropData = ['Processing', 'Order Placed', 'Delivered'];
            var dropdown = new DropDownList({
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





