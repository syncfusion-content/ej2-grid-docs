ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar,ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSetting: {pageCount: 5},
    toolbar: ['Add', 'Delete'],
    cellSaved: save,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showConfirmDialog:false, mode: 'Batch'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true }, width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 140},
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right',validationRules: { min:1, max:1000 },editType: 'numericedit', width: 140},
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit',edit:{ popupHeight: '300px' }, width: 150, },
    ],
    height: 272,
});
grid.appendTo('#Grid');

function save()
{
    grid.editModule.batchSave();
}