import { createElement } from '@syncfusion/ej2-base';
import { Grid, ForeignKey, Edit, Toolbar, ColumnModel } from '@syncfusion/ej2-grids';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data,employeeData } from './datasource.ts';

Grid.Inject(ForeignKey, Edit, Toolbar);

let employees = [
    { FirstName: 'Nancy', EmployeeID: 1 },
    { FirstName: 'Andrew', EmployeeID: 6 },
    { FirstName: 'Janet', EmployeeID: 3 },
    { FirstName: 'Margaret', EmployeeID: 4 },
    { FirstName: 'Steven', EmployeeID: 5 },
    { FirstName: 'Laura', EmployeeID: 8 }
];

let comboboxObj: ComboBox;

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120 },
        {
            field: 'EmployeeID', headerText: 'Employee Name', foreignKeyValue: 'FirstName', dataSource: employeeData, width: '150',
            edit: {
                create: () => {
                    return createElement('input');
                },
                read: () => {
                    // Ensure comboboxObj is defined
                    if (comboboxObj) {
                        let value: Object[] = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', comboboxObj.value));
                        return value.length && value[0]['EmployeeID'];
                    }
                    return null;
                },
                destroy: () => {
                    // to destroy the custom control.
                    comboboxObj.destroy();
                },
                write: (args: { rowData: Object, column: ColumnModel, foreignKeyData: Object, element: HTMLElement }) => {
                    let comboBoxObject: ComboBox = new ComboBox({
                        dataSource: employees,
                        fields: { value: args.column.foreignKeyValue },
                        value: args.foreignKeyData[0][args.column.foreignKeyValue]
                    });
                    comboBoxObject.appendTo(args.element);
                    // Assign comboboxObj after it's initialized
                    comboboxObj = comboBoxObject;
                }
            }
        },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', type: 'date', textAlign: 'Right', width: '130' },
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: '120' }
    ],
    height: 315,
});
grid.appendTo('#Grid');