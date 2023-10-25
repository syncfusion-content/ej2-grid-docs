var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: { allowColumnSelection: true, type: 'Single' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'} 
    ],
    height: 315
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
    width: 140,
});
textbox.appendTo('#textboxvalue');

var button = new ej.buttons.Button({
    content: 'Select Column',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
    columnIndex = parseInt(textbox.element.value, 10);
    if (!isNaN(columnIndex)) {
        grid.selectionModule.selectColumn(columnIndex);
    }
};
