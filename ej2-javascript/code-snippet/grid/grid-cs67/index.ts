import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu',
    operators: {
     stringOperator: [
         { value: 'startsWith', text: 'Starts With' },
         { value: 'endsWith', text: 'Ends With' },
         { value: 'contains', text: 'Contains' },
         { value: 'equal', text: 'Equal' },
         { value: 'notEqual', text: 'Not Equal' }
       ],
       numberOperator: [
         { value: 'equal', text: 'Equal' },
         { value: 'notEqual', text: 'Not Equal' },
         { value: 'greaterThan', text: 'Greater Than' },
         { value: 'lessThan', text: 'Less Than' }
       ],
       dateOperator: [
         { value: 'equal', text: 'Equal' },
         { value: 'notEqual', text: 'Not Equal' },
         { value: 'greaterThan', text: 'After' },
         { value: 'lessThan', text: 'Before' }
       ],
       booleanOperator: [
         { value: 'equal', text: 'Equal' },
         { value: 'notEqual', text: 'Not Equal' }
       ]
     }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 100 },
        { field: 'Verified', headerText: 'Verified', displayAsCheckBox: true, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');