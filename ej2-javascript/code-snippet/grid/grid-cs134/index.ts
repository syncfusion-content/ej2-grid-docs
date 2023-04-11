

import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 325,
    load: () => {
        let rowHeight: number = grid.getRowHeight();  //height of the each row
        let gridHeight: number = grid.height;  //grid height
        let pageSize: number = grid.pageSettings.pageSize;   //initial page size
        let pageResize: any = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here
        grid.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
});
grid.appendTo('#Grid');



