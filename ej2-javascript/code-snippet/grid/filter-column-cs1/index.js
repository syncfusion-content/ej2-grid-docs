ej.grids.Grid.Inject(ej.grids.Filter);
var typeData= ['Menu', 'CheckBox', 'Excel'];
var grid = new ej.grids.Grid({
    dataSource: data,
    dataBound:dataBound,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100 },
        { field: 'Verified', headerText: 'Verified', type: 'boolean', displayAsCheckBox: true, width: 100 },
    ],
});
grid.appendTo('#Grid');

function dataBound() {
    fieldData=grid.getColumnFieldNames();
    dropdownlist1.dataSource=fieldData;
}

var dropdownlist1 = new ej.dropdowns.DropDownList({
    width: 150,
    placeholder: "Eg: OrderID",
    change: onFieldChange,
});
dropdownlist1.appendTo('#dropdowncolumn');

function onFieldChange(args) {
    dropdownlist2.enabled = true;
    column = grid.getColumnByField(args.value);
}

var dropdownlist2 = new ej.dropdowns.DropDownList({
    width: 150,
    placeholder: "Eg: Excel",
    enabled: false,
    dataSource: typeData,
    change: onTypeChange,
});
dropdownlist2.appendTo('#dropdownfiltertype');

function onTypeChange(args) {
    var columnFilterSettings = { type: args.value };
    column.filter = columnFilterSettings;
    grid.refresh();
}