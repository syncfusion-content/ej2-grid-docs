class SerialNoAdaptor extends ej.data.ODataV4Adaptor {
    processResponse() {
        var i= 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding serial number
        original.result.forEach(function(item){item['Sno'] = ++i});
        return { result: original.result, count: original.count };
    }
}

var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new SerialNoAdaptor()
});

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'Sno', width: 120, headerText: 'SNO', textAlign: 'Right' },
        { field: 'CustomerID', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

