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

var dropDownColumn = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'CustomerID', value: 'CustomerID' },        
      { text: 'OrderID', value: 'OrderID' },
      { text: 'ShipName', value: 'ShipName' },
      { text: 'ShipCity', value: 'ShipCity' },
    ],
    style: 'padding: 26px 0 0 0',
    index: '0',
    width: '120',
    fields:{ text: 'text', value: 'value' }
  });
  dropDownColumn.appendTo('#dropdownlist1');
  
var removeSortButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#sort');
  document.getElementById('sort').addEventListener('click', function(){
      grid.removeSortColumn(dropDownColumn.value);
  });