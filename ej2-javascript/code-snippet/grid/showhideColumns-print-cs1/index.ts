

import { Grid, DetailRow, Toolbar, Page } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow, Toolbar, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['Print'],
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        pageSettings: { pageSizes: true, pageSize: 6 },

        toolbarClick: function(args) {
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = true;
                }
                else if (this.columns[i].field == "ShipCity") {
                    this.columns[i].visible = false;
                }
            }
        },
    printComplete: function(args) {
        for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].field == "CustomerID") {
                this.columns[i].visible = false;
            }
            else if (this.columns[i].field == "ShipCity") {
                    this.columns[i].visible = true;
            }
        }
    }
});
grid.appendTo('#Grid');



