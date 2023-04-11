

import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'RoolNo', headerText: 'Rool No', width: 100 },
        { field: 'Name', headerText: 'Name of the inventor', clipMode: 'Clip', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patent families', clipMode: 'Ellipsis', width: 100 },
        { field: 'Country', headerText: 'Country', width: 80 },
        { field: 'mainfields', headerText: 'Main fields of Invention', clipMode: 'EllipsisWithTooltip', width: 100 },
    ]
});
grid.appendTo('#Grid');



