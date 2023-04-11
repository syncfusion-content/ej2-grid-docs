ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0,10),
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
            filterBarTemplate: {
                create: function(args) {
                    return ej.base.createElement('input', { className: 'flm-input' });
                },
                write: function(args) {
                    fEmployeeData.splice(0, 0, {'FirstName': 'All'}); // for clear filtering
                    var dropInstance = new ej.dropdowns.DropDownList({
                        dataSource: new ej.data.DataManager(fEmployeeData),
                        fields: { text: 'FirstName' },
                        placeholder: 'Select a value',
                        popupHeight: '200px',
                        index: 0,
                        change: function(args) {
                            if (args.value !== 'All') {
                                grid.filterByColumn('EmployeeID', 'equal', args.value);
                            }
                            else {
                                grid.removeFilteredColsByField('EmployeeID');
                            }
                        }
                    });
                    dropInstance.appendTo(args.element);
                }
            }
        },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
        { field: 'ShipName', headerText: 'Ship Name', width: 180 }
    ],
    height: 260
});
grid.appendTo('#Grid');

