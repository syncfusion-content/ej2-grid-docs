ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    detailDataBound: function(e){
        var detail = new ej.grids.Grid({
            dataSource: data.filter(function(item){ return item['EmployeeID'] === e.data['EmployeeID'];}),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo(e.detailElement.querySelector('.custom-grid'));
    }
});
grid.appendTo('#Grid');