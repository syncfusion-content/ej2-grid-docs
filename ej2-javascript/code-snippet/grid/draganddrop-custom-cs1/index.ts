import { Grid, Page, RowDD, Selection, Edit } from '@syncfusion/ej2-grids';
import { TreeGrid, Edit as TreeEdit } from '@syncfusion/ej2-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { sampleGridData } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection, Edit);
TreeGrid.Inject(TreeEdit);

let grid: Grid = new Grid({
  dataSource: sampleGridData,
  allowPaging: true,
  allowSelection: true,
  allowRowDragAndDrop: true,
  rowDropSettings: { targetID: 'TreeGrid' },
  selectionSettings: { type: 'Multiple' },
  editSettings: { allowDeleting: true },
  columns: [
    { field: 'taskID', headerText: 'taskID', textAlign: 'Right', width: 90 },
    { field: 'taskName', headerText: 'taskName', textAlign: 'Left', width: 180 },
    { field: 'description', headerText: 'description', textAlign: 'Left', width: 180 },
    { field: 'category', headerText: 'category', textAlign: 'Left', width: 180 },
    { field: 'startDate', headerText: 'startDate', textAlign: 'Right', format: 'yMd', width: 120 },
    { field: 'duration', headerText: 'duration', textAlign: 'Right', width: 80 }
  ],
  rowDrop: function (args: any) {
    let grid = (document.getElementById('Grid') as any).ej2_instances[0];
    let tree = (document.getElementById('TreeGrid') as any).ej2_instances[0];
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      let rowIndex = !isNullOrUndefined(args.target.closest('.e-row'))
        ? args.target.closest('.e-row').rowIndex
        : 0;
      for (let i = 0; i < args.data.length; i++) {
        tree.addRecord(args.data[i], rowIndex);
        grid.deleteRecord('taskID', args.data[i]);
      }
    }
  },
});

grid.appendTo('#Grid');

let treeGridObj: TreeGrid = new TreeGrid({
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