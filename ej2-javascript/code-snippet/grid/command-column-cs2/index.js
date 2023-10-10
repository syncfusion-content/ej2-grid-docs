var commandClick = function(args){
    dialog.visible=true
    dialog.content=
    `<p><b>ShipName:</b> ${args.rowData.ShipName}</p>
    <p><b>ShipPostalCode:</b> ${args.rowData.ShipPostalCode}</p>
    <p><b>ShipAddress:</b> ${args.rowData.ShipAddress}</p>`

}
ej.grids.Grid.Inject(ej.grids.CommandColumn);
var grid = new ej.grids.Grid({
    dataSource: data,
    commandClick:commandClick,
    dialogClose: dialogClose,
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 100 },
      { field: 'CustomerID', headerText: 'Cusomer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight',textAlign: 'Right',
      editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150,textAlign: 'Right',
        editType: 'dropdownedit'},
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }]},
        ],
    height: 315
});
grid.appendTo('#Grid');

let dialogVisible =  false;

var dialog = new ej.popups.Dialog({

    header: "Row Information",
    content: "dialogContent",
    showCloseIcon: "true",
    width: "400px",
    visible: dialogVisible,
    close: dialogClose,

})
dialog.appendTo('#dialog');


function dialogClose()
{
    dialogVisible = false;
}