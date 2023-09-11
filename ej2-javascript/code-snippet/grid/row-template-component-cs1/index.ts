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
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'Quantity', headerText: 'Quantity', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'OrderStatus', headerText: 'Order Status', width: 100 },
    ],

    dataBound: (args) => {

        var gridInstance = (document.getElementById('Grid') as any).ej2_instances[0];

        var chipList = gridInstance.getContentTable().querySelectorAll('.chipList');
        for (var i = 0; i < chipList.length; i++) {
            var innerText = chipList[i].innerText;
            new ChipList({ chips: [innerText] }, chipList[i]);
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
                format: 'dd-MM-yyyy',
            });
            datepickerObject.appendTo(dateInput);
        }
        
        var dropdownList = gridInstance.getContentTable().querySelectorAll('.dropdownlist-input');
        for (var i = 0; i < dropdownList.length; i++) {
            var dropdownValueInput = dropdownList[i];
            var dropData = ['Processing', 'Order Placed'];
            var listObj = new DropDownList({
                dataSource: dropData,
                value: dropdownList[i].value,
            });

            listObj.appendTo(dropdownValueInput);
        }
    },
});
grid.appendTo('#Grid');





