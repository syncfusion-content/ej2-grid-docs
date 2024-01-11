var countryData = ej.data.DataUtil.distinct(data, 'ShipCountry', true);
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: 'dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            new ej.dropdowns.DropDownList({value: args.rowData.ShipCountry, popupHeight: '300px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry'));
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                args.form.elements.namedItem('CustomerID').focus();
            } else {
                args.form.elements.namedItem('OrderID').focus();
            }
        }
    }
});
grid.appendTo('#Grid');

