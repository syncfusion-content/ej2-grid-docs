

import { Grid, Edit, Toolbar, Column } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let element: HTMLElement;
let dropdownobj: DropDownList;

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'ShipCountry', width: 300, headerText: 'ShipCountry' , edit: {
            create: function () {
               element = document.createElement('input');
               return element;
            },
            read: function () {
                return dropdownobj.value;
            },
            destroy: function () {
                dropdownobj.destroy();
            },
            write: function (args) {
                dropdownobj = new DropDownList({
                   dataSource:data,
                   value: args.rowData[args.column.field],
                   query: new Query().select(['EmployeeID', 'ShipCountry']).take(10),
                   fields: { text: 'ShipCountry', value: 'ShipCountry' },
                   placeholder: 'Select a Country',
                   headerTemplate: '<table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>',
                   itemTemplate: '<div class="e-grid"><table class="e-table"><tbody><tr><td class="e-rowcell">${EmployeeID}</td><td class="e-rowcell">${ShipCountry}</td></tr> </tbody></table></div>'
                });
                dropdownobj.appendTo(element);
            }
          }
        }
      ]
});
grid.appendTo('#Grid');



