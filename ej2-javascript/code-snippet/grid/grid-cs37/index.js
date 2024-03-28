ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    editparams: { params: { popupHeight: '300px' } },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', editType: 'datepickeredit', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit', validationRules: { required: true }, edit: 'editparams' }
    ],
    height: 273
});
grid.appendTo('#Grid');

var currentColumn;

var alignmentData = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
    { text: 'ShipCountry', value: 'ShipCountry' }
]

var dropdownList = new ej.dropdowns.DropDownList({
    value: 'OrderID',
    popupHeight: '240px',
    width: 150,
    dataSource: alignmentData,
    fields: { text: 'text', value: 'value' },
    change: changeAlignment
});
dropdownList.appendTo('#dropdown');

function changeAlignment(args) {
    // Reset the allowEditing property of the previously selected column
    if (currentColumn) {
        currentColumn.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    currentColumn = grid.getColumnByField(args.value);
    currentColumn.allowEditing = false;
}