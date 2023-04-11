

import { Grid, Selection, RowSelectEventArgs, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple', persistSelection: true },
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    pageSettings: { pageSizes: true, pageSize: 5 }
});
grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');
document.getElementById('show').onclick = () => {
    let grid = document.getElementById('Grid').ej2_instances[0];
    let selectedrecords: Object[] = grid.getSelectedRecords();
    let selectedRecordsCount: number = selectedrecords.length;
    alert(selectedRecordsCount);
}


