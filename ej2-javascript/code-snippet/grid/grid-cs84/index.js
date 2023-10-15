ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Group);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowGrouping: true,
  allowSorting: true,
  groupSettings: { showDropArea: false, columns: ['CustomerID', 'ShipName'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

let columns = [
  { text: 'CustomerID', value: 'CustomerID' },
  { text: 'OrderID', value: 'OrderID' },
  { text: 'ShipCity', value: 'ShipCity' },
  { text: 'ShipName', value: 'ShipName' },
];

let field = { text: 'text', value: 'value' };

let dropdown = new ej.dropdowns.DropDownList({
  value: 'OrderID',
  popupHeight: '240px',
  width: 120,
  dataSource: columns,
  field: field,
});
dropdown.appendTo('#dropdowns');

button = new ej.buttons.Button({
  content: 'Group Column',
});
button.appendTo('#group');

document.getElementById('group').onclick = () => {
  grid.groupColumn(dropdown.value);
};

button = new ej.buttons.Button({
  content: 'Ungroup Column',
});
button.appendTo('#ungroup');

document.getElementById('ungroup').onclick = () => {
  grid.ungroupColumn(dropdown.value);
};