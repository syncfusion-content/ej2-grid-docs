
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        height: 325,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'Freight', headerText: 'Freight', width: 135, format: 'C2',  textAlign: 'Right' },
            { field: 'OrderDate',headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right'}
        ],
    });
    grid.appendTo('#Grid');

    let enableQuery = false;

    let toggle = new ej.buttons.Switch({
        change: toggleQueryString,
        checked: enableQuery
      });
      toggle.appendTo('#switch');
      
    function toggleQueryString(args) {
    grid.pageSettings.enableQueryString = args.checked;
    }