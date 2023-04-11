var elem;
var maskObj;
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        {
            field: 'Mask', headerText: 'Mask', width: 140, edit: {
                create: function(){
                    elem = document.createElement('input');
                    return elem;
                },
                read: function() {
                    return maskObj.value;
                },
                destroy: function() {
                    maskObj.destroy();
                },
                write: function(args){
                    maskObj = new ej.inputs.MaskedTextBox({
                        mask: "0-0-0-0",
                        value: args.rowData.Mask
                    });
                    maskObj.appendTo(args.element);
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');

