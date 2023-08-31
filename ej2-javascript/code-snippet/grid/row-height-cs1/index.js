

var small = new ej.buttons.Button({ cssClass: 'e-small' });
small.appendTo('#small');

//small button click event handler
small.element.onclick = function () {
  grid.rowHeight = 20;
};

var medium = new ej.buttons.Button({ cssClass: 'e-small' });
medium.appendTo('#medium');

//medium button click event handler
medium.element.onclick = function () {
  grid.rowHeight = 40;
};

var big = new ej.buttons.Button({ cssClass: 'e-small' });
big.appendTo('#big');

//big button click event handler
big.element.onclick = function () {
  grid.rowHeight = 60;
};



var grid = new ej.grids.Grid({
    dataSource: data,
    rowHeight: 42,
    height: 400,
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        width: 120,
        textAlign: 'Right',
      },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        format: 'yMd',
        textAlign: 'Right',
      },
      { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
});

grid.appendTo('#Grid');
