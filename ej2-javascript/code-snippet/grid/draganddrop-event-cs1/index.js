ej.grids.Grid.Inject(ej.grids.RowDD);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowRowDragAndDrop: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
      { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
      { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    ],
    rowDragStartHelper: function (args) {
      document.getElementById('message').innerText = `rowDragStartHelper event triggered`;
      if (args.data[0].OrderID === 10248) {
        args.cancel = true;
      }
    },
    rowDragStart: function (args) {
      document.getElementById('message').innerText = `rowDragStart event triggered`;
      args.cancel = true;
    },
    rowDrag: function (args) {
      document.getElementById('message').innerText = `rowDrag event triggered`;
      args.rows.forEach((row) => {
        row.classList.add('drag-limit');
      });
    },
    rowDrop: function (args) {
      document.getElementById('message').innerText = `rowDrop event triggered`;
      var value = [];
      for (var r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      grid.reorderRows(value, args.dropIndex);
    },
  });
grid.appendTo('#Grid'); 