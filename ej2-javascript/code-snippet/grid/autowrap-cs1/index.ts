

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    gridLines: 'Default',
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    columns: [
        { field: 'RoolNo', headerText: 'Rool No', width: 120 },
        { field: 'Name', headerText: 'Name of the inventor', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patentfamilies', width: 100 },
        { field: 'Country', headerText: 'country', width: 130 },
        { field: 'mainfields', headerText: 'Main fields of Invention', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');



