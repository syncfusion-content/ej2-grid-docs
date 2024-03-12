var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection:true,
    selectionSettings: { type: 'Multiple', persistSelection: true },
    allowFiltering:true,
    filterSettings: { type: 'CheckBox' },
    allowPaging:true,
    pageSettings: { pageSize: 5 },
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    height: 400,
    columns: [
        { type: 'checkbox', width: 120 },
        { field: 'List', headerText: 'List',  width: 120 },
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID',  width: 150 },
        { field: 'CustomerID', headerText: 'CustomerID',  width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

grid.rowDataBound = function(args) {
    args.isSelectable = args.data.List % 5 === 0; 
}

for (var i = 0; i < data.length; i++) {
    data[i]['List'] = i + 1;
}