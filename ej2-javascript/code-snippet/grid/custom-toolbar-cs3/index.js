function toolbarClick(args){
    if (args.item.id === 'expandall') {
        grid.groupModule.expandAll();
    }
    if (args.item.id === "collapseall") {
        grid.groupModule.collapseAll();
    }
};
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    allowGrouping: true,
    groupSettings: { columns: ['FirstName'] },
    toolbar: [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall', align: 'Left'}, { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' }, { text: 'Search', align: 'Center'}],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'Country', headerText: 'Country', textAlign: 'Right', width: 120, country: 'string' },
        { field: 'PostalCode', headerText: 'Postal Code', textAlign: 'Right', width: 140, type:'string' }
    ],
    height: 200,
});
grid.appendTo('#Grid');

