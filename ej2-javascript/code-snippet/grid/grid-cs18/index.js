ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var priceElem;
var priceObj;
var stockElem;
var stockObj;

var grid = new ej.grids.Grid({
  dataSource: productData,
  cellEdit: cellEdit,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
  height: 273,
  columns: [
    { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
    { field: 'ProductName', headerText: 'Product Name', width: 120 },
    { field: 'UnitPrice', headerText: 'UnitPrice', textAlign: 'Right',
      edit: {
        create: function() {
          priceElem = document.createElement('input');
          return priceElem;
        },
        read: function() {
          return priceObj.value;
        },
        destroy: function() {
          priceObj.destroy();
        },
        write: function(args) {
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          priceObj = new ej.inputs.NumericTextBox(
            {
              value: args.rowData[args.column.field],
              change: function(args) {
                var totalCostValue = args.value * rowData['UnitsInStock'];
                grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
              }
            });
          priceObj.appendTo(priceElem);
        }
      },
      width: 150, format: 'C2'
    },
    {
      field: 'UnitsInStock', headerText: 'Units In Stock', textAlign: 'Right',
      edit: {
        create: function() {
          stockElem = document.createElement('input');
          return stockElem;
        },
        read: function() {
          return stockObj.value;
        },
        destroy: function() {
          stockObj.destroy();
        },
        write: function(args) {
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          stockObj = new ej.inputs.NumericTextBox(
            {
              value: args.rowData[args.column.field],
              change: function(args) {
                var totalCostValue = args.value * rowData['UnitPrice'];
                grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
              }
            });
          stockObj.appendTo(stockElem);
        }
      },
      width: 150
    },
    { field: 'TotalCost', headerText: 'Total Unit Cost', width: 150, format: 'C2', textAlign: 'Right' }
  ]
});
grid.appendTo('#Grid');

function cellEdit(args) {
  if(args.columnName == "TotalCost") {
    args.cancel = true;
  }
}