ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date',format: 'yMd', width: 150 }
    ]
});
grid.appendTo('#Grid');


var textbox = new ej.inputs.TextBox({
    placeholder: 'Select page index: ',
    width: 120,
  });
  textbox.appendTo('#textboxvalue');

let button = new ej.buttons.Button({
    content: 'click button',
  });
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
    grid.pagerModule.goToPage(textbox.value);
}