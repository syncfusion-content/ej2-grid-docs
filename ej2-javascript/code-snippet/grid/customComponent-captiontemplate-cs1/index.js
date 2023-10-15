ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Page);
var grid = new ej.grids.Grid({
  dataSource: data,
  dataBound: dataBound,
  allowGrouping: true,
  groupSettings: {
        captionTemplate: '#captiontemplate',
      },
  columns: [
    {
      field: 'OrderID',
      headerText: 'ID',
      textAlign: 'Right',
      width: 90,
    },
    { field: 'CustomerID', headerText: 'Name', width: 100 },
    { field: 'ShipCity', headerText: 'City', width: 100 },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
  ],
  height: 315,
});
grid.appendTo('#Grid');

function dataBound(){
  let groupCations = document.getElementsByClassName('groupChip');
  for (var i = 0; i < groupCations.length; i++) {
    var chip = new ej.buttons.ChipList({});
    chip.appendTo(groupCations[i]);
  }
}