import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionBegin: function (args: EditEventArgs) {
        if (args.requestType === 'beginEdit') {
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = true;
                }
                else if (this.columns[i].field == "ShipCountry") {
                    this.columns[i].visible = false;
                }
            }
        }
        else if (args.requestType === 'add') {
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = true;
                }
            }
        }
        else if (args.requestType === 'save') {
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = false;
                }
                else if (this.columns[i].field == "ShipCountry") {
                    this.columns[i].visible = true;
                }
            }
        }
    }
});
grid.appendTo('#Grid');