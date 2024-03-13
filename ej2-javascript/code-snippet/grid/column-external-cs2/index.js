var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple', allowColumnSelection: true },
    pageSettings: { pageSize: 8 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format:'C2', textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format:'yMd', textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var button1 = new ej.buttons.Button({content: 'Select [1, 2]'});
button1.appendTo('#selectColumns1');
document.getElementById('selectColumns1').addEventListener('click', function () {
    selectColumns([1, 2]);
});

var button2 = new ej.buttons.Button({content: 'Select [0, 2]'});
button2.appendTo('#selectColumns2');  
document.getElementById('selectColumns2').addEventListener('click', function () {
    selectColumns([0, 2]);
});
  
var button3 = new ej.buttons.Button({content: 'Select [1, 3]'});
button3.appendTo('#selectColumns3');  
document.getElementById('selectColumns3').addEventListener('click', function () {
    selectColumns([1, 3]);
});
  
var button4 = new ej.buttons.Button({content: 'Select [0, 5]'});
button4.appendTo('#selectColumns4');    
document.getElementById('selectColumns4').addEventListener('click', function () {
  selectColumns([0, 5]);
});
 
var button5 = new ej.buttons.Button({content: 'Select [1, 6]'});
button5.appendTo('#selectColumns5');
document.getElementById('selectColumns5').addEventListener('click', function () {
  selectColumns([1, 6]);
});
 
var button6 = new ej.buttons.Button({content: 'Select [0, 2, 5]'});
button6.appendTo('#selectColumns6');
document.getElementById('selectColumns6').addEventListener('click', function () {
  selectColumns([0, 2, 5]);
});

var button7 = new ej.buttons.Button({content: 'Select [1, 3, 6]'});
button7.appendTo('#selectColumns7');
document.getElementById('selectColumns7').addEventListener('click', function () {
  selectColumns([1, 3, 6]);
});
  
var button8 = new ej.buttons.Button({content: 'Select [2, 4, 6]'});
button8.appendTo('#selectColumns8');
document.getElementById('selectColumns8').addEventListener('click', function () {
  selectColumns([2, 4, 6]);
});

var button9 = new ej.buttons.Button({content: 'Select [0, 3, 5]',});
button9.appendTo('#selectColumns9');
document.getElementById('selectColumns9').addEventListener('click', function () {
  selectColumns([0, 3, 5]);
});

function selectColumns(columns) {
  grid.selectionModule.clearColumnSelection();
  grid.selectionModule.selectColumns(columns);
}