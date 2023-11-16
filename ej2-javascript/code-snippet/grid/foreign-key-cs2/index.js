var autoCompleteObj;
ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true },
    columns: [
        {
            field: 'OrderID',
            headerText: 'Order ID',
            isPrimaryKey: true,
            textAlign: 'Right',
            width: 100,
        },
        {
            field: 'EmployeeID',
            headerText: 'Employee Name',
            width: 150,
            foreignKeyValue: 'FirstName',
            dataSource: employeeData,
            edit: {
                create: function(){
                  // to create input element
                
                  return ej.base.createElement('input');
                },
                read: function(){
                  // return edited value to update data source
                  var value = new ej.data.DataManager(employeeData).executeLocal(
                    new ej.data.Query().where('FirstName', 'equal', autoCompleteObj.value)
                  );
                  return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
                },
                destroy: function(){
                  // to destroy the custom component.
                  autoCompleteObj.destroy();
                },
                write: function(args) {
                  // to show the value for date picker
                    autoCompleteObj = new ej.dropdowns.AutoComplete({
                    dataSource: employeeData,
                    fields: { value: args.column.foreignKeyValue },
                    value: args.foreignKeyData[0][args.column.foreignKeyValue],
                  });
                  autoCompleteObj.appendTo(args.element);
                }
              },
        },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ],
    height: 270,
});
grid.appendTo('#Grid');