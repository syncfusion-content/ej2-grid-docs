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
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'Country', headerText: 'Country', width: 120 },
        { field: 'PostalCode', headerText: 'Postal Code', width: 140 }
    ],
    height: 200,
});
grid.appendTo('#Grid');