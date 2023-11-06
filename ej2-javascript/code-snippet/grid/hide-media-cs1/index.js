var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        {
            field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120,
            hideAtMedia: '(min-width: 700px)'
        }, // column visibility hide when browser screen width lessthan 700px;

        {
            field: 'CustomerID', headerText: 'Customer ID', width: 140,
            hideAtMedia: '(max-width: 700px)'
        }, // column Visibility show when browser screen width  500px or less;

        { 
            field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120,
            hideAtMedia:'(min-width: 500px)'
        }, // column visibility hide when browser screen width lessthan 500px;

        {
            field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 130
            
        } // it always shown
    ],
    height: 315
});
grid.appendTo('#Grid');