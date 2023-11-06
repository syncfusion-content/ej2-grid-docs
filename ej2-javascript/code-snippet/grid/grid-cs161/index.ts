import { Grid, Edit, Page, Filter, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Page, Filter, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection:true,
    selectionSettings: { type: 'Multiple', persistSelection: true },
    allowFiltering:true,
    filterSettings: { type: 'CheckBox' },
    allowPaging:true,
    pageSettings: { pageSize: 5 },
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    rowDataBound: rowDataBound,
    columns: [
        { type: 'checkbox', width: 120 },
        { field: 'List', headerText: 'List',  width: 120 },
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID',  width: 150 },
        { field: 'CustomerID', headerText: 'CustomerID',  width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

for (let i = 0; i < data.length; i++) {
    data[i]['List'] = i + 1;
}
function rowDataBound(args): void {
    args.isSelectable = args.data.List % 5 === 0;
}