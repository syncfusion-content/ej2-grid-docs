var grid = new ej.grids.Grid({
    dataSource: data,
    height: 315,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', customAttributes: {class: "custom-css"}, textAlign: 'Right',width: 100  },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: "custom-css"}, width: 130 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right',width: 80 }
    ]
  });
  grid.appendTo('#Grid');  