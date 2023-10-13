ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', headerText: 'Employee Name', width: 120, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
            filterBarTemplate: {
                create: function () {
                    return ej.base.createElement('input', { className: 'flm-input' });
                },
                write: function (args) {
                    fEmployeeData.splice(0, 0, { 'FirstName': 'All' }); // for clear filtering
                    var dropInstance = new ej.dropdowns.DropDownList({
                        dataSource: new ej.data.DataManager(fEmployeeData),
                        fields: { text: 'FirstName' },
                        placeholder: 'Select a value',
                        popupHeight: '200px',
                        index: 0,
                        change: function (e) {
                            if (e.value !== 'All') {
                                grid.filterByColumn('EmployeeID', 'equal', e.value);
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
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    height: 260
});
grid.appendTo('#Grid');