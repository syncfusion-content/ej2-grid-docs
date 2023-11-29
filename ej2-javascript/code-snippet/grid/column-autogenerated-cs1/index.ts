import { Grid, ColumnModel, Edit} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
});
grid.appendTo('#Grid');
grid.dataBound = () => {
    let column: ColumnModel = grid.columns[0];
    column.isPrimaryKey = true;
  };