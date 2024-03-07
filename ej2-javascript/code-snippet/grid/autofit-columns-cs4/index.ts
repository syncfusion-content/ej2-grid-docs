import { Grid, Resize ,Page, Toolbar,ColumnChooser, ActionEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize, Page, Toolbar, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['ColumnChooser'],
    showColumnChooser: true,
    actionComplete: function({ requestType }: ActionEventArgs){
        if (requestType === 'columnstate') {
           grid.autoFitColumns();
    }},
    columns: [
        { field: 'OrderID', headerText: 'Order ID',textAlign:'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
       
    ],
    height: 315
});
grid.appendTo('#Grid');



