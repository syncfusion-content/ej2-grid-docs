ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules:  { required: true, number: true }},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules:  { required: true}},
        { field: 'Freight', headerText: 'Freight', width: 120,format: 'C2', textAlign: 'Right',editType: 'numericedit',
        validationRules: { required: true }
        },
        { field: 'OrderDate', headerText: 'Order Date', width: 130,format: 'yMd',editType: 'datepickeredit',textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150,editType: 'dropdownedit',edit: { params: { popupHeight: '300px' } }}
    ]
});
grid.appendTo('#Grid');

var toolbar = new ej.navigations.Toolbar({
    items: [
        { text: "Add", id: "add" },
        { text: "Edit", id: "edit" },
        { text: "Delete", id: "delete" },
        { text: "Update", id: "update" },
        { text: "Cancel", id: "cancel" }
    ],
    clicked: onToolbarClick
    });
    toolbar.appendTo('#element');
    //Render initialized Toolbar control

    function onToolbarClick(args){
        switch (args.item.id) {
          case 'add':
            grid.addRecord();
            break;
          case 'edit':
            grid.startEdit();
            break;
          case 'delete':
            grid.deleteRecord();
            break;
          case 'update':
            grid.endEdit();
            break;
          case 'cancel':
            grid.closeEdit();
            break;
        }
      }