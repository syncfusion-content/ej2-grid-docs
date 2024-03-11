import { createElement } from '@syncfusion/ej2-base';
import { Grid, Toolbar, PrintEventArgs, Print, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
 
Grid.Inject(Toolbar, Print, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    toolbar: ['Print'],
    selectionSettings: { type: 'Multiple' },
    beforePrint: beforePrint,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

function beforePrint (e: PrintEventArgs) {
    let rows = grid.getSelectedRows();
    if (rows.length) {
        e.element['ej2_instances'][0].getContent().querySelector('tbody').remove();
        let tbody = createElement('tbody');
        rows = [...rows];
        for (let r = 0; r < rows.length; r++) {
            tbody.appendChild(rows[r].cloneNode(true));
        }
        e.element['ej2_instances'][0].getContentTable().appendChild(tbody);
    }
}