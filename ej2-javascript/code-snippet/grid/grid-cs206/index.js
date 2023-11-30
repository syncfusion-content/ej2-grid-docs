ej.grids.Grid.Inject(ej.grids.Page,ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    actionBegin: onActionBegin,
    actionComplete: onActionComplete,
    pageSettings: {  pageSize: 5 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date',format: 'yMd', width: 150 }
    ],
    height: 268
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

let message1 = document.getElementById('message1');

function onActionBegin({requestType,currentPage,previousPage})
{
    if (requestType === 'paging') {
        message.textContent = (currentPage  > previousPage )
            ? `You are going to switch to page ${parseInt(currentPage, 10) + 1}`
            : `You are going to switch to page ${previousPage}`;
    }
}

function onActionComplete(args)
{
    if (args.requestType === 'paging') {
        message1.textContent = 'Now you are in page ' + args.currentPage;
    }
}