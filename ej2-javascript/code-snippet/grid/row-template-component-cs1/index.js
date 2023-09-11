var grid = new ej.grids.Grid({
    dataSource: data,
    rowTemplate: '#rowtemplate',
    height: 335,
    width: 'auto',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'Quantity', headerText: 'Quantity', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'OrderStatus', headerText: 'Order Status', width: 100 },
    ],
    dataBound: (args) => {

        var gridInstance = document.getElementById('Grid').ej2_instances[0];

        var chipList = gridInstance.getContentTable().querySelectorAll('.chipList');
        for (var i = 0; i < chipList.length; i++) {
            var innerText = chipList[i].innerText;
            new ej.buttons.ChipList({ chips: [innerText] }, chipList[i]);
        }

        var NumericList = gridInstance.getContentTable().querySelectorAll('.numeric');
        for (var i = 0; i < NumericList.length; i++) {
            var currency = new ej.inputs.NumericTextBox({});
            currency.appendTo(NumericList[i]);
        }

        var dateList = gridInstance.getContentTable().querySelectorAll('.date-input');
        for (var i = 0; i < dateList.length; i++) {
            var dateInput = dateList[i];
            var dateValue = dateInput.value;
            var datepicker = new ej.calendars.DatePicker({
                value: new Date(dateValue),
                format: 'dd-MM-yyyy',
            });
            datepicker.appendTo(dateInput);
        }

        var dropdownList = gridInstance.getContentTable().querySelectorAll('.dropdownlist-input');
        for (var i = 0; i < dropdownList.length; i++) {
            var dropdownValueInput = dropdownList[i];
            var dropData = ['Processing', 'Order Placed'];
            var listObj = new ej.dropdowns.DropDownList({
                dataSource: dropData,
                value: dropdownList[i].value,
            });
            listObj.appendTo(dropdownValueInput);
        }
    },
});
grid.appendTo('#Grid');



