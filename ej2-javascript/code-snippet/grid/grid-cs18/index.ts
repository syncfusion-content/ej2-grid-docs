

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { productData } from './productData.ts';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar);

let priceElem: HTMLElement;;
let priceObj: NumericTextBox;
let stockElem: HTMLElement;;
let stockObj: NumericTextBox;

let grid: Grid = new Grid({
  dataSource: productData,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Batch',
  },
  height: 273,
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
  columns: [
    {
      field: 'ProductID',
      isPrimaryKey: true,
      headerText: 'Product ID',
      textAlign: 'Right',
      validationRules: { required: true, number: true },
      width: 140
    },
    {
      field: 'ProductName',
      headerText: 'Product Name',
      validationRules: { required: true },
      width: 140
    },
    {
      field: 'UnitPrice',
      headerText: 'UnitPrice',
      textAlign: 'Right',
      edit: {
        create: function () {
          priceElem = document.createElement('input');
          return priceElem;
        },
        read: function () {
          return priceObj.value;
        },
        destroy: function () {
          priceObj.destroy();
        },
        write: function (args) {
          let rowData = args.rowData;
          let rowIndex = grid.getRowInfo(args.row).rowIndex;
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              let totalCostValue = args.value * rowData['UnitsInStock'];
              grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
            }
          });
          priceObj.appendTo(priceElem);
        }
      },
      width: 140,
      format: 'C2',
      validationRules: { required: true }
    },
    {
      field: 'UnitsInStock',
      headerText: 'Units In Stock',
      textAlign: 'Right',
      edit: {
        create: function () {
          stockElem = document.createElement('input');
          return stockElem;
        },
        read: function () {
          return stockObj.value;
        },
        destroy: function () {
          stockObj.destroy();
        },
        write: function (args) {
          let rowData = args.rowData;
          let rowIndex = grid.getRowInfo(args.row).rowIndex;
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              let totalCostValue = args.value * rowData['UnitPrice'];
              grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
            }
          });
          stockObj.appendTo(stockElem);
        }
      },
      width: 140,
      validationRules: { required: true }
    },
    {
      field: 'TotalCost',
      headerText: 'Total Unit Cost',
      textAlign: 'Right',
      width: 140,
      format: 'C2',
    }
  ]
});
grid.appendTo('#Grid');

grid.cellEdit = function (args) {
  if (args.columnName == "TotalCost") {
    args.cancel = true;
  }
}