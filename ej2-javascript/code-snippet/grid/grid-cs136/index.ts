

import { Grid, Page, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar);

let initialGridLoad: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    pageSettings: { pageSizes: true, pageSize: 9 }
});
grid.appendTo('#Grid');

grid.dataBound = () =>{
    if (initialGridLoad) {
        initialGridLoad = false;
        var pager = document.getElementsByClassName('e-gridpager');
        var topElement;
        if (grid.allowGrouping || grid.toolbar) {
            topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                        document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        grid.element.insertBefore(pager[0], topElement[0]);
    }
};



