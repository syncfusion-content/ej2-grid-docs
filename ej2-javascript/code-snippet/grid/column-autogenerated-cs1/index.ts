import { Grid, ColumnModel, Edit, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
});
grid.appendTo('#Grid');
grid.dataBound = () => {
    let column: ColumnModel = grid.columns[0];
    column.isPrimaryKey = true;
};