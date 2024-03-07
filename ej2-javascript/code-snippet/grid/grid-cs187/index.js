var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {  type: 'Multiple', mode: 'Row'   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100}
  ],
  height: 315,
});
grid.appendTo('#Grid');

var button1 = new ej.buttons.Button({content: 'Select [1,3]'});
button1.appendTo('#selectRows1');
document.getElementById('selectRows1').addEventListener('click', function () {
  selectRows([1,3]);
});

var button2 = new ej.buttons.Button({content: 'Select [0,2]'});
button2.appendTo('#selectRows2');  
document.getElementById('selectRows2').addEventListener('click', function () {
  selectRows([0,2]);
});
 
var button3 = new ej.buttons.Button({content: 'Select [2,4]'});
button3.appendTo('#selectRows3');  
document.getElementById('selectRows3').addEventListener('click', function () {
  selectRows([2,4]);
});
 
var button4 = new ej.buttons.Button({content: 'Select [0,5]'});
button4.appendTo('#selectRows4');    
document.getElementById('selectRows4').addEventListener('click', function () {
  selectRows([0,5]);
});
 
var button5 = new ej.buttons.Button({content: 'Select [1,6]'});
button5.appendTo('#selectRows5');
document.getElementById('selectRows5').addEventListener('click', function () {
  selectRows([1,6]);
});
 
var button6 = new ej.buttons.Button({content: 'Select [0,7,8]'});
button6.appendTo('#selectRows6');
document.getElementById('selectRows6').addEventListener('click', function () {
  selectRows([0,7,8]);
});
 
var button7 = new ej.buttons.Button({content: 'Select [1,9,10]'});
button7.appendTo('#selectRows7');
document.getElementById('selectRows7').addEventListener('click', function () {
  selectRows([1,9,10]);
});
 
var button8 = new ej.buttons.Button({content: 'Select [4,7,12]'});
button8.appendTo('#selectRows8');
document.getElementById('selectRows8').addEventListener('click', function () {
  selectRows([4,7,12]);
});
 
var button9 = new ej.buttons.Button({content: 'Select [2,5,6]',});
button9.appendTo('#selectRows9');
document.getElementById('selectRows9').addEventListener('click', function () {
  selectRows([2,5,6]);
});
 
function selectRows(rows) {
  grid.selectionModule.clearColumnSelection();
  grid.selectionModule.selectRows(rows);
}