

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid ({
    dataSource: data
});
grid.appendTo('#Grid');



