ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    sortSettings:{
        columns: [
          { field: 'CustomerID', direction: 'Ascending' },
          { field: 'ShipName', direction: 'Descending' },
        ],},
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    ],
});
grid.appendTo('#Grid');

var clearSortButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#sort');
  document.getElementById('sort').addEventListener('click', function(){
      grid.clearSorting();
  });