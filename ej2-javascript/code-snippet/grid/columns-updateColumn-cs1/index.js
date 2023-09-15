var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' }
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

