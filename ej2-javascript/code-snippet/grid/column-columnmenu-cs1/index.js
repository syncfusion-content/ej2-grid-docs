ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.Sort, ej.grids.Filter, ej.grids.ColumnMenu);
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  allowSorting: true,
  allowFiltering: true,
  allowGrouping: true,
  showColumnMenu: true,
  filterSettings: { type: 'CheckBox' },
  columnMenuItems: [
    'SortAscending',
    'SortDescending',
    'Group',
    'Ungroup',
    'Filter',
    {
      text: 'Sub Menu',
      items: [
        { text: 'Option 1', id: 'option1' },
        { text: 'Option 2', id: 'option2' },
        { text: 'Option 3', id: 'option3' },
        {
          text: 'Nested Sub Menu',
          items: [
            { text: 'Nested Option 1', id: 'nestedoption1' },
            { text: 'Nested Option 2', id: 'nestedoption2' },
          ],
        },
      ],
    },
  ],
  columnMenuClick: function (args) {
    if (args.item.id === 'option1') {
      // custom function
    }
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right', showInColumnChooser: false },
    { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
    { field: 'ShipName', headerText: 'Ship Name', width: 300 },
    { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
    { field: 'ShipCity', headerText: 'Ship City', width: 200 }
  ]
});
grid.appendTo('#Grid');

