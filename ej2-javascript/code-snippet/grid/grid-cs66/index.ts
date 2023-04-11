

import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu'},
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: {
                    ui: {
                        create: (args: { target: Element, column: Object }) => {
                            let db: Object = new DataManager(data);
                            let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            this.dropInstance = new DropDownList({
                                dataSource: new DataManager(data),
                                fields: { text: 'OrderID', value: 'OrderID' },
                                placeholder: 'Select a value',
                                popupHeight: '200px'
                            });
                            this.dropInstance.appendTo(flValInput);
                        },
                        write: (args: {
                            column: Object, target: Element, parent: any,
                            filteredValue: number | string
                        }) => {
                            this.dropInstance.value = args.filteredValue;
                        },
                        read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                        }
                    }
                }
            },
            { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ]
    height: 273
});
grid.appendTo('#Grid');



