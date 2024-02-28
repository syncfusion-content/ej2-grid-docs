import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        pageSettings: { pageSizes: true, pageSize: 12 },
        dataBound: dataBound,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        height: 268
    });
grid.appendTo('#Grid');

let initialGridLoad = true;

function dataBound()
{
    if (initialGridLoad) {
        initialGridLoad = false;
        let pager = document.getElementsByClassName('e-gridpager');
        let topElement;
        if (grid.allowGrouping || grid.toolbar) {
            topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        grid.element.insertBefore(pager[0], topElement[0]);
    }
}