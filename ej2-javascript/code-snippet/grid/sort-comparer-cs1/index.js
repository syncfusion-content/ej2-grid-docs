var grid = new ej.grids.Grid({
    dataSource: Orderdata,
    allowSorting: true,
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', sortComparer: sortComparer, width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var action;
function actionBegin(args) { 
        if (args.requestType == "sorting") { 
            action = args.direction; 
        } 
} 

function sortComparer(reference, comparer) { 
        var sortAsc = action === "Ascending" ? true : false; 
        if (sortAsc && reference === null) { 
            return 1; 
        } 
        else if (sortAsc && comparer === null) { 
            return -1; 
        } 
        else if (!sortAsc && reference === null) { 
            return -1; 
        } 
        else if (!sortAsc && comparer === null) { 
            return 1; 
        } else { 
            return reference - comparer; 
        } 
}


