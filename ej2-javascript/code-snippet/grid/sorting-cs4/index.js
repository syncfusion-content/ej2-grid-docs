ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    sortSettings:{
        columns: [
          { field: 'ShipName', direction: 'Ascending' },
        ],},
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80, format:'C2', textAlign:'Right' }
    ],
});
grid.appendTo('#Grid');

var dropDownColumn = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'OrderID', value: 'OrderID' },
      { text: 'CustomerID', value: 'CustomerID' },
      { text: 'Freight', value: 'Freight' },
    ],
    style: 'padding: 26px 0 0 0',
    index: '0',
    width: '120',
    field:{ text: 'text', value: 'value' }
  });
  dropDownColumn.appendTo('#dropdownlist1');
  var dropDownDirection = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'Ascending', value: 'Ascending' },
      { text: 'Descending', value: 'Descending' },
    ],
    style: 'padding: 26px 0 0 0',
    index: '0',
    width: '120',
  });
  dropDownDirection.appendTo('#dropdownlist2');
  
var sortButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#sort');
  document.getElementById('sort').addEventListener('click', function(){
  grid.sortColumn(dropDownColumn.value, dropDownDirection.value, true)
  });