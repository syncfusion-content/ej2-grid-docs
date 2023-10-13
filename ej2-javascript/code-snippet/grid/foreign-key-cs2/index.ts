import { createElement } from '@syncfusion/ej2-base';
import { Grid, ForeignKey, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data, employeeData } from './datasource.ts';

Grid.Inject(ForeignKey, Edit, Toolbar);

let autoComplete: AutoComplete;

let grid: Grid = new Grid(
        {
            dataSource: data,
            editSettings: { allowEditing: true },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            columns: [
                { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 100 },
                // Foreign column
                {
                    field: 'EmployeeID', headerText: 'First Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData,
                    edit: {
                            create: () => { // to create input element
                                return createElement('input');
                            },
                            read: () => { // return edited value to update data source
                                let value: Object[] = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', autoComplete.value));
                                return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
                            },
                            destroy: () => { // to destroy the custom component.
                                autoComplete.destroy();
                            },
                            write: (args: { rowData: Object, column: Column, foreignKeyData: Object }) => { // to show the value for custom component
                                autoComplete = new AutoComplete({
                                    dataSource: employeeData,
                                    fields: { value: args.column.foreignKeyValue },
                                    value: args.foreignKeyData[0][args.column.foreignKeyValue]
                                });
                                autoComplete.appendTo(args.element);
                            }
                        }
                },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80},
                { field: 'ShipCity', headerText: 'Ship City', width: 130 }
            ],
            height: 270
        });
    grid.appendTo('#Grid');