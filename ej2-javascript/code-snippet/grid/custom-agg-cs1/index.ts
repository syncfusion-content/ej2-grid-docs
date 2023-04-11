

import { Grid, Page, Aggregate  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager, Query, DataUtil } from '@syncfusion/ej2-data';

Grid.Inject(Page, Aggregate );


let customAggregateFn = function() {
let results = new DataManager(this.currentViewData).executeLocal(new Query().select(['ShipCountry']));
let distinct = DataUtil.distinct(results, 'ShipCountry', true);
return distinct.length;
}

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
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



