ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu'},
    height: 273,
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: {
                    ui: {
                        create: function(args){
                            var db = new ej.data.DataManager(data);
                            var flValInput = new ej.base.createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            this.dropInstance = new ej.dropdowns.DropDownList({
                                dataSource: new ej.data.DataManager(data),
                                fields: { text: 'OrderID', value: 'OrderID' },
                                placeholder: 'Select a value',
                                popupHeight: '200px'
                            });
                            this.dropInstance.appendTo(flValInput);
                        },
                        write: function(args){
                            this.dropInstance.value = args.filteredValue;
                        },
                        read: function(args) {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                        }
                    }
                }
            },
            { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ]
});
grid.appendTo('#Grid');


