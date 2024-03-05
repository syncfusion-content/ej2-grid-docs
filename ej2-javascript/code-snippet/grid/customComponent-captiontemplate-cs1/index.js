ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
  dataSource: data,
  dataBound: dataBound,
  allowGrouping: true,
  groupSettings: { captionTemplate: '#groupSettingsCaptionTemplate'},
  columns: [
    { field: 'OrderID', headerText: 'ID',textAlign: 'Right',width: 90},
    { field: 'CustomerID', headerText: 'Name', width: 100 },
    { field: 'ShipCity', headerText: 'City', width: 100 },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
  ],
  height: 315,
});
grid.appendTo('#Grid');

function dataBound(){
  var groupCaptions = document.getElementsByClassName('chip');
  for (var i = 0; i < groupCaptions.length; i++) {
    var chip = new ej.buttons.ChipList({});
    chip.appendTo(groupCaptions[i]);
  }
}