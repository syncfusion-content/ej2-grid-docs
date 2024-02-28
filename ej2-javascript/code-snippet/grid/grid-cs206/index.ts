import { Grid, Page, Selection,PageEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        actionBegin: onActionBegin,
        actionComplete: onActionComplete,
        pageSettings: {  pageSize: 5 },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right',format: 'C2', width: 90 },
            { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right',format: 'yMd', width: 120 }
        ]
    });
grid.appendTo('#Grid');

let message = document.getElementById('message');

let message1 = document.getElementById('message1'); 

function onActionBegin({requestType,currentPage,previousPage})
{
    if (requestType === 'paging') {
        (message as HTMLElement).textContent = (currentPage  > previousPage )
            ? `You are going to switch to page ${parseInt(currentPage, 10) + 1}`
            : `You are going to switch to page ${previousPage}`;
    }
}

function onActionComplete(args: PageEventArgs)
{
    if (args.requestType === 'paging') {
        (message1 as HTMLElement).textContent = 'Now you are in page ' + args.currentPage;
    }
}