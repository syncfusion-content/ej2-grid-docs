var datePickerObj;
ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Aggregate);

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        {
            field: 'OrderID',
            headerText: 'Order ID',
            textAlign: 'Right',
            width: 100,
        },
        {
            field: 'EmployeeID',
            headerText: 'Employee Name',
            width: 120,
            foreignKeyValue: 'FirstName',
            dataSource: employeeData,
        },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right' , width: 80},
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ],
    height: 280,
    aggregates: [
        {
            columns: [
                {
                    type: 'Custom',
                    customAggregate: customAggregateFn,
                    field: 'EmployeeID',
                    footerTemplate: 'Count of Janet: ${Custom}',
                },
            ],
        },
    ],
});
grid.appendTo('#Grid');

function customAggregateFn(data1, column) {
    return data1.result.filter((dObj) => {
        return (
            ej.base.getValue(
                'FirstName',
                ej.grids.getForeignData(grid.getColumnByField(column.field), dObj)[0]
            ) === 'Janet'
        );
    }).length;
}