var grid = new ej.grids.Grid({
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

function beforePrint (e) {
    var rows = grid.getSelectedRows();
    if (rows.length) {
        e.element['ej2_instances'][0].getContent().querySelector('tbody').remove();
        var tbody = ej.base.createElement('tbody');
        rows = [...rows];
        for (var r = 0; r < rows.length; r++) {
            tbody.appendChild(rows[r].cloneNode(true));
        }
        e.element['ej2_instances'][0].getContentTable().appendChild(tbody);
    }
}