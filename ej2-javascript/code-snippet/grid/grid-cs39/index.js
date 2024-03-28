ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true },
    queryCellInfo: queryCellInfo,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID' ,isPrimaryKey: true,textAlign: 'Right', width: 120,validationRules: { required: true}},
        { field: 'CustomerID', headerText: 'Customer Name', width: 120,validationRules: { required: true  } },
        { field: 'OrderDate', headerText: 'Order Date',editType: 'datepickeredit',format: "M/d/yy" ,textAlign: 'Right',validationRules: { required: true  } , width: 130,type: 'date'},
        { field: 'Freight', headerText: 'Freight',format: 'C2',textAlign: 'Right', width: 90,validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'Verified',headerText: 'Verified',textAlign: 'Right', width: 90,validationRules: { required: true  },template: '#template'}
    ],
    height: 315
});
grid.appendTo('#Grid');

function queryCellInfo(args) {
    if (args.column.headerText === 'Verified') {
        var checkbox = new ej.buttons.CheckBox
        ({  
            checked: args.data.Verified
        });
        checkbox.appendTo(args.cell.querySelector('input'));
    }
  }