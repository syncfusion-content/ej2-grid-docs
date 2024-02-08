var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {  type: 'Multiple', mode: 'Cell'   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315
});
grid.appendTo('#Grid');

var button1 = new ej.buttons.Button({content: 'Select [1,3]'});
button1.appendTo('#selectcell1');
document.getElementById('selectcell1').addEventListener('click', function () {
  selectCells(1,3);
});

var button2 = new ej.buttons.Button({content: 'Select [2,2]'});
button2.appendTo('#selectcell2');
document.getElementById('selectcell2').addEventListener('click', function () {
  selectCells(2,2);
});

var button3 = new ej.buttons.Button({content: 'Select [0,0]'});
button3.appendTo('#selectcell3');
document.getElementById('selectcell3').addEventListener('click', function () {
  selectCells(0,0);
});

var button4 = new ej.buttons.Button({content: 'Select [4,2]'});
button4.appendTo('#selectcell4');
document.getElementById('selectcell4').addEventListener('click', function () {
  selectCells(4,2);
});

var button5 = new ej.buttons.Button({content: 'Select [5,1]'});
button5.appendTo('#selectcell5');
document.getElementById('selectcell5').addEventListener('click', function () {
  selectCells(5,1);
});

var button6 = new ej.buttons.Button({content: 'Select [3,3]'});
button6.appendTo('#selectcell6');
document.getElementById('selectcell6').addEventListener('click', function () {
  selectCells(3,3);
});

var button7 = new ej.buttons.Button({content: 'Select [0,3]'});
button7.appendTo('#selectcell7');
document.getElementById('selectcell7').addEventListener('click', function () {
  selectCells(0,3);
});

var button8 = new ej.buttons.Button({content: 'Select [8,1]'});
button8.appendTo('#selectcell8');
document.getElementById('selectcell8').addEventListener('click', function () {
  selectCells(8,1);
});

var button9 = new ej.buttons.Button({content: 'Select [8,2]'});
button9.appendTo('#selectcell9');
document.getElementById('selectcell9').addEventListener('click', function () {
  selectCells(8,2);
});

function selectCells(rowIndex,columnIndex) {
  grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex]  }]);
}