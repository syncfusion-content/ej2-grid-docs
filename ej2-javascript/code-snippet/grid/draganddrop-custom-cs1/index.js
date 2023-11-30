ej.grids.Grid.Inject(ej.grids.RowDD);
var grid = new ej.grids.Grid({
  dataSource: sampleGridData,
  allowPaging: true,
  pageSettings: true,
  allowSelection: true,
  allowRowDragAndDrop: true,
  rowDropSettings: { targetID: 'TreeGrid' },
  selectionSettings: { type: 'Multiple' },
  editSettings: { allowDeleting: true },
  rowDrop: function (args) {
    var grid = document.getElementById('Grid').ej2_instances[0];
    var tree = document.getElementById('TreeGrid').ej2_instances[0];
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      var rowIndex =
        args.target.closest('.e-row') !== null
          ? args.target.closest('.e-row').rowIndex
          : 0;
      for (var i = 0; i < args.data.length; i++) {
        tree.addRecord(args.data[i], rowIndex);
        grid.deleteRecord('taskID', args.data[i]);
      }
    }
  },
  columns: [
    { field: 'taskID', headerText: 'taskID', textAlign: 'Right', width: 90 },
    { field: 'taskName', headerText: 'taskName', textAlign: 'Left', width: 180 },
    { field: 'description', headerText: 'description', textAlign: 'Left', width: 180 },
    { field: 'category', headerText: 'category', textAlign: 'Left', width: 180 },
    { field: 'startDate', headerText: 'startDate', textAlign: 'Right', format: 'yMd', width: 120 },
    { field: 'duration', headerText: 'duration', textAlign: 'Right', width: 80 }
  ],
});
grid.appendTo('#Grid');

var treeGridObj = new ej.treegrid.TreeGrid({
  childMapping: 'subtasks',
  editSettings: { allowAdding: true, allowEditing: true },
  columns: [
    { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
    { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
    { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
    { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
  ],
});
treeGridObj.appendTo('#TreeGrid');