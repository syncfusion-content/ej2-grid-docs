ej.grids.Grid.Inject(ej.grids.DetailRow);
var orderData = data;
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    detailDataBound: function(args){
        var empIdValue = args.childGrid.parentDetails.parentRowData.EmployeeID;
        var matchedData = new ej.data.DataManager(orderData).executeLocal(
            new ej.data.Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        args.childGrid.query = new ej.data.Query();
        args.childGrid.dataSource = matchedData;
        }   
    });
grid.appendTo('#Grid');

