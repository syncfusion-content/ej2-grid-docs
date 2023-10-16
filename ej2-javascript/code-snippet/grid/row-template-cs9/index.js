ej.grids.Grid.Inject(ej.grids.Reorder);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowReordering: true,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    columnDrop: function (args) {
        document.getElementById('message').innerText = 'columnDrop event triggered';
    
        if (args.column.allowReordering == true) {
          grid.getColumnByField(args.column.field).customAttributes = { class: 'customcss'};
        }
      },
      columnDragStart: function (args) {
        document.getElementById('message').innerText = `columnDragStart event triggered`;
    
        if (args.column.field == 'OrderID') {
          grid.getColumnByField(args.column.field).allowReordering = false;
        }
      },
      columnDrag: function (args) {
        var index = args.target.getAttribute('data-colIndex');
        if (index) {
          document.getElementById('message').innerText =`columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
        }
      },
    
    height: 315
});
grid.appendTo('#Grid');