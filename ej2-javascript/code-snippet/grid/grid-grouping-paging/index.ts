import { Grid, Group, Page,Data } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Group, Page);

let oldGenerateQuery = Data.prototype.generateQuery;
Data.prototype.generateQuery = function() {
    let query = oldGenerateQuery.call(this, true);
    // Check if 'pageQuery' is available in the prototype chain
    if (Data.prototype.hasOwnProperty('pageQuery')) {
        let pageQueryFn = Data.prototype['pageQuery'] as (query: Query) => void;
        pageQueryFn.call(this, query);
    }
    return query;
};

let grid: Grid = new Grid({
  dataSource: data,
  allowGrouping: true,
  allowPaging: true,
  pageSettings: { pageSize: 5 },
  groupSettings: { showGroupedColumn: false, columns: ['ShipCountry'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 120 },
  ],
  height: 267,
});
grid.appendTo('#Grid');