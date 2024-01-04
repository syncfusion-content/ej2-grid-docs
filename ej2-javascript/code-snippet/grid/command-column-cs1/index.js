ej.grids.Grid.Inject(ej.grids.CommandColumn, ej.grids.Edit);

var commands =  [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
{ type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
{ type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
{ type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }]

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', isPrimaryKey: 'true', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Cusomer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 170,textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Shi pCountry', width: 170,textAlign: 'Right', editType: 'dropdownedit', width: 120},
        { headerText: 'Commands', width: 120, commands: commands} 
    ],
    height: 310
});
grid.appendTo('#Grid');