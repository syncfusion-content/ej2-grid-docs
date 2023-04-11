var data = new ej.data.DataManager({
    url: 'http://some.com/invalidUrl'
});

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    actionFailure: (e) => {
      var span = document.createElement('span');
      grid.element.parentNode.insertBefore(span, grid.element);
      span.style.color = "#FF0000"
      span.innerHTML = "Server exception: 404 Not found";
    }
});

grid.appendTo('#Grid');

