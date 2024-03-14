import { Grid, Filter,FilterEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    actionBegin: function (args:FilterEventArgs) {
        if (args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity') {
            args.cancel = true;
            (document.getElementById('message') as HTMLElement).innerText =
                'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action is cancelled for ' + args.currentFilteringColumn;
        }
    },
    actionComplete: function (args:FilterEventArgs) {
        if (args.requestType == 'filtering' && args.currentFilteringColumn) {
            (document.getElementById('message') as HTMLElement).innerText =
                'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
        } else {
            (document.getElementById('message') as HTMLElement).innerText = '';
        }
    },
    height: 273
});
grid.appendTo('#Grid');