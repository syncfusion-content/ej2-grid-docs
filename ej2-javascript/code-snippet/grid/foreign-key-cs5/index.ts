

import { Grid, ForeignKey, Aggregate, getForeignData, CustomSummaryType, AggregateColumnModel } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { getValue } from '@syncfusion/ej2-base';

Grid.Inject(ForeignKey, Aggregate);

// Custom Aggregate function for foreign column
let customAggregateFn: CustomSummaryType = (data: Object, column: AggregateColumnModel) => {
    return data.result.filter((dObj: Object) => {
        return getValue('FirstName' , getForeignData(grid.getColumnByField(column.columnName), dObj)[0]) === 'Janet';
    }).length;
};

let grid: Grid = new Grid(
    {
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData,
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 280,
        aggregates: [
            {
                columns: [
                    {
                        type: 'Custom',
                        customAggregate: customAggregateFn,
                        field: 'EmployeeID',
                        footerTemplate: 'Count of Janet: ${Custom}'
                    }
                ]
            }
        ]
    });
    grid.appendTo('#Grid');



