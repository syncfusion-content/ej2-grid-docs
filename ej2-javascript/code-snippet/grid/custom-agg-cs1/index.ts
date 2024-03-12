import { Grid, Aggregate  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataUtil } from '@syncfusion/ej2-data';

Grid.Inject(Aggregate );

let customAggregateFn = function() {
  let distinct = DataUtil.distinct(data, "ShipCountry", true);
  return distinct.length;
}

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2' },
        { field: "ShipCountry", headerText: "Ship Country", width: 150 }
    ],
    height: 220,
     aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'ShipCountry',
            footerTemplate: 'Distinct Count: ${Custom}'
        }]
    }]
});
grid.appendTo('#Grid');