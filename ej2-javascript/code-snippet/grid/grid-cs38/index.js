ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

ej.base.L10n.load({
    'en-US': {
        grid: {
            'OKButton':'YES',
            'CancelButton':'Discard' ,
            'ConfirmDelete': 'Are you sure you want to delete the selected Record?' 
        }
    }
});

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID' ,isPrimaryKey: true, width: 120},
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120},
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args)
{
    if (args.item.text === 'Delete') {
        var dialogObj= grid.editModule.dialogObj   ;
        dialogObj.header = 'Delete Confirmation Dialog';
        dialogObj.showCloseIcon = true;    
    }
}