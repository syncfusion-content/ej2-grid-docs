var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {field: 'OrderID',headerText: 'Order ID',width: 120},
    {field: 'CustomerID',headerText: 'Customer ID',width: 140,},
    {field: 'Freight',headerText:'Freight', format: 'C', width: 120 },
    {field: 'OrderDate',headerText: 'Order Date',format: 'yMd',width: 140},
  ],
});

grid.appendTo('#Grid');

var button = new ej.buttons.Button({
  content: 'CHANGE HEIGHT TO 20PX',
});
button.appendTo('#small');

var button1 = new ej.buttons.Button({
  content: 'DEFAULT HEIGHT TO 42PX',
});
button1.appendTo('#medium');

var button2 = new ej.buttons.Button({
  content: 'CHANGE HEIGHT TO 60PX',
});
button2.appendTo('#big');

document.getElementById('changeHeight').onclick = function (event) {
  var heightMap = { small: '20px', medium: '42px', big: '60px' };
  var headerCells = (grid).getHeaderContent().querySelectorAll('.e-headercell');
  headerCells.forEach((headerCell) => {
    headerCell.style.height = (heightMap)[
      event.target.id
    ];
  });
}
