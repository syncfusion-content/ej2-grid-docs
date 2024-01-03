var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Dialog',
    },
    actionComplete: actionComplete,
    columns: [{
        field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
       { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 },
    ]
});
grid.appendTo('#Grid');

function actionComplete(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        var newFooterButton = {
            buttonModel: { content: 'custom' },
            click: onCustomButtonClick
        };
        args.dialog.buttons.push(newFooterButton);
        args.dialog.refresh();
    }
}

function onCustomButtonClick() {
    alert('Add/Edit dialog custom footer button clicked');
}