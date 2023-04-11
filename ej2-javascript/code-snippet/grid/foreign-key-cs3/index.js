ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Filter);
var dropInstance;
var grid = new ej.grids.Grid({
    dataSource: data.slice(0,10),
    allowFiltering: true,
    filterSettings: {type: 'Menu'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
            filter: {
                    ui: {
                        create: function(args) {
                            let flValInput: HTMLElement = ej.base.createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            dropInstance = new ej.dropdowns.DropDownList({
                                dataSource: new ej.data.DataManager(fEmployeeData),
                                fields: { text: 'FirstName', value: 'EmployeeID' },
                                placeholder: 'Select a value',
                                popupHeight: '200px'
                            });
                            dropInstance.appendTo(flValInput);
                        },
                        write: function(arg) {
                            dropInstance.text = args.filteredValue || '';
                        },
                        read: function(args) {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.text);
                        }
                    }
                }
        },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
        { field: 'ShipName', headerText: 'Ship Name', width: 180 }
    ],
    height: 315
});
grid.appendTo('#Grid');

