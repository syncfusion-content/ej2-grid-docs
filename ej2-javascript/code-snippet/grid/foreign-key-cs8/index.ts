

import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { Grid, ForeignKey, Filter } from '@syncfusion/ej2-grids';
import { data, fEmployeeData } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(ForeignKey, Filter);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowFiltering: true,
        filterSettings: {type: 'Menu'},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
                filter: {
                        ui: {
                            create: (args: { target: Element, column: Object }) => {
                                let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                                args.target.appendChild(flValInput);
                                this.dropInstance = new DropDownList({
                                    dataSource: new DataManager(fEmployeeData),
                                    fields: { text: 'FirstName', value: 'EmployeeID' },
                                    placeholder: 'Select a value',
                                    popupHeight: '200px'
                                });
                                this.dropInstance.appendTo(flValInput);
                            },
                            write: (args: {
                                column: Object, target: Element, parent: any,
                                filteredValue: number | string
                            }) => {
                                this.dropInstance.text = args.filteredValue || '';
                            },
                            read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.text);
                            }
                        }
                    }
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
    grid.appendTo('#Grid');



