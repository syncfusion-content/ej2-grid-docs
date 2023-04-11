var datePickerObj;
ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Aggregate);
var grid = new ej.grids.Grid({
            dataSource: data.slice(0,10),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
                {
                    field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData,
                },
                { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
                { field: 'ShipName', headerText: 'Ship Name', width: 180 }
            ],
            height: 280,
            aggregates: [
                {
                    columns: [
                        {
                            type: 'Custom',
                            customAggregate: customAggregateFn,
                            field: 'EmployeeID',
                            footerTemplate: 'Margaret count: ${Custom}'
                        }
                    ]
                }
            ]
        });
grid.appendTo('#Grid');

