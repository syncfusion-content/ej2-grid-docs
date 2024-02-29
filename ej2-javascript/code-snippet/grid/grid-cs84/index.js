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

var columns = [
  { text: 'CustomerID', value: 'CustomerID' },
  { text: 'OrderID', value: 'OrderID' },
  { text: 'ShipCity', value: 'ShipCity' },
  { text: 'ShipName', value: 'ShipName' },
];

var field = { text: 'text', value: 'value' };

var dropdown = new ej.dropdowns.DropDownList({
  value: 'CustomerID',
  popupHeight: '240px',
  width: 120,
  dataSource: columns,
  fields: field,
});
dropdown.appendTo('#dropdowns');

var button = new ej.buttons.Button({
  content: 'Group Column',
});
button.appendTo('#group');

document.getElementById('group').onclick = () => {
  grid.groupColumn(dropdown.value);
};

var buttonUngroup = new ej.buttons.Button({
  content: 'Ungroup Column',
});
buttonUngroup.appendTo('#ungroup');

document.getElementById('ungroup').onclick = () => {
  grid.ungroupColumn(dropdown.value);
};