ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {  type: 'Multiple', mode: 'Cell'   },
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

document.getElementById('selectcell1').addEventListener('click', function () {
  selectCells(1,3);
});

document.getElementById('selectcell2').addEventListener('click', function () {
  selectCells(2,2);
});

document.getElementById('selectcell3').addEventListener('click', function () {
  selectCells(0,0);
});

document.getElementById('selectcell4').addEventListener('click', function () {
  selectCells(4,2);
});

document.getElementById('selectcell5').addEventListener('click', function () {
  selectCells(5,1);
});

document.getElementById('selectcell6').addEventListener('click', function () {
  selectCells(3,3);
});

document.getElementById('selectcell7').addEventListener('click', function () {
  selectCells(0,3);
});

document.getElementById('selectcell8').addEventListener('click', function () {
  selectCells(8,1);
});

document.getElementById('selectcell9').addEventListener('click', function () {
  selectCells(8,2);
});

function selectCells(rowIndex,columnIndex) {
  grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex]  }]);
}