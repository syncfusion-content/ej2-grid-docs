ej.grids.Grid.Inject(ej.grids.ForeignKey,ej.grids.Edit, ej.grids.Toolbar);

var comboboxObj;

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true },
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID' ,textAlign: 'Right',isPrimaryKey: true, width: 120},
        { field: 'EmployeeID', headerText: 'Employee Name',foreignKeyValue: 'FirstName',dataSource: employeeData, width: '150',
        edit:
            {
                create: function () {
                    return ej.base.createElement('input');
                },
                read: function () {
                    var value =new ej.data.DataManager(employeeData).executeLocal(new ej.data.Query().where('FirstName', 'equal', comboboxObj.value));
                    return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
                  },
                  destroy: function () {
                    // to destroy the custom control.
                    comboboxObj.destroy();
                  },
                  write: function (args) {
                    comboboxObj = new ej.dropdowns.ComboBox({
                        dataSource: employees,
                        fields: { value: args.column.foreignKeyValue },
                        value: args.foreignKeyData[0][args.column.foreignKeyValue]
                    });
                    comboboxObj.appendTo(args.element);
                  }
            } },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', type: 'date', textAlign: 'Right', width: '130'},
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: '120'}
    ],
    height: 315,
});
grid.appendTo('#Grid');

var employees = [
    { FirstName: 'Nancy', EmployeeID: 1 },
    { FirstName: 'Andrew', EmployeeID: 6 },
    { FirstName: 'Janet', EmployeeID: 3 },
    { FirstName: 'Margaret', EmployeeID: 4 },
    { FirstName: 'Steven', EmployeeID: 5 },
    { FirstName: 'Laura', EmployeeID: 8 }
  ]