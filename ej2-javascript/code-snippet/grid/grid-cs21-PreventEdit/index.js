

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Batch',
    },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    cellEdit: cellEdit,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true,
         validationRules: { required: true, number: true }, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120
        },
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right',validationRules: { min:1, max:1000 }, width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 },
    ],
    height: 272,
});
grid.appendTo('#Grid');

function cellEdit(args)
{
    if (args.value === 'France') {
        args.cancel = true;
    }
}