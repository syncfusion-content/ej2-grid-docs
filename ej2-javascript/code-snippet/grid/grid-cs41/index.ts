

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { productData } from './productData.ts';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar);

var priceElem: HTMLElement;;
var priceObj: NumericTextBox;
var stockElem: HTMLElement;;
var stockObj: NumericTextBox;

let grid: Grid = new Grid({
  dataSource: productData,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Normal',
    newRowPosition: 'Top'
  },
  allowPaging: true,
  pageSettings: { pageCount: 5 },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
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
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var formEle = grid.element.querySelector('form').ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement('TotalCost');
              totalCostFieldEle.value = priceObj.value * stockObj.value;
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
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var formEle = grid.element.querySelector('form').ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement('TotalCost');
              totalCostFieldEle.value = priceObj.value * stockObj.value;
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
      allowEditing: false,
      width: 140,
      format: 'C2',
    }
  ]
});
grid.appendTo('#Grid');



