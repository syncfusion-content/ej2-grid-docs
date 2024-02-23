ej.grids.Grid.Inject(ej.grids.Selection, ej.grids.Toolbar, ej.grids.Edit, ej.grids.Filter, ej.grids.Sort, ej.grids.Page, ej.grids.Group, ej.grids.Aggregate, ej.grids.RowDD);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'],
    searchSettings: { fields: ['ShipCountry'], operator: 'contains', key: 'a', ignoreCase: true },
    allowPaging: true,
    allowReordering: true,
    allowRowDragAndDrop: true,
    pageSettings: { pageCount: 2, pageSizes: true },
    allowGrouping: true,
    selectionSettings: { type: 'Multiple', mode: 'Both' },
    selectedRowIndex: 6,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] },
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    groupSettings: { columns: ['CustomerID'] },
    showColumnChooser: true,
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 135, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'ShipName', headerText: 'Shipped Name', textAlign: 'Right', width: 145 },
    ],
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            format: 'C2',
            groupFooterTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Sum',
            field: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Max',
            field: 'Freight',
            groupCaptionTemplate: 'Max: ${Max}'
        }]
    }],
});

grid.appendTo('#Grid');

