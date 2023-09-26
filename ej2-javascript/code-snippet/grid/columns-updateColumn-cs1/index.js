var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
      { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var updateColumns = new ej.buttons.Button({ cssClass: 'e-info' }, '#update');

document.getElementById('update').onclick = function () {
  grid.columns[0].textAlign = 'Center';
  grid.columns[0].width = '100';
  grid.columns[2].visible = false;
  grid.columns[1].customAttributes = { class: 'customcss' };
  grid.refreshColumns();
};

