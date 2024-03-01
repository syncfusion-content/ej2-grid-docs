import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { type:'Excel'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

let singleFilterButton: Button = new Button({ cssClass: 'e-outline' }, '#singleFilter');
(document.getElementById('singleFilter')as HTMLElement).onclick = function() {
    grid.clearFiltering(); // filter OrderID column with single value
     grid.filterByColumn('OrderID', 'equal', 10248); 
};

let multipleFilterButton: Button = new Button({ cssClass: 'e-outline' }, '#multipleFilter');
(document.getElementById('multipleFilter')as HTMLElement).onclick = function() {
    grid.clearFiltering(); // filter CustomerID column with multiple values
    grid.filterByColumn('CustomerID', 'equal', [
        'VINET',
        'TOMSP',
        'ERNSH',
    ]); 
};