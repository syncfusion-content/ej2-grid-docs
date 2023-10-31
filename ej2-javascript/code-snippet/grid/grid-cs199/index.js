ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {    type: 'Multiple', mode: 'Cell'    },
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
    {
      field: 'ShipCountry',headerText: 'Ship Country',width: 150,textAlign: 'Right'
    },
    {
      field: 'Freight',headerText: 'Freight', width: 100, textAlign: 'Right',format: 'C2',
    }
  ],
  height: 315,
});
grid.appendTo('#Grid');

let  button = new ej.buttons.Button({
    content: 'Clear Cell Selection',
  });
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  grid.clearCellSelection();
};