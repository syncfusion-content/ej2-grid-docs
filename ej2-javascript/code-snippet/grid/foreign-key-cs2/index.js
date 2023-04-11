var autoCompleteObj;
ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Edit);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0,10),
    editSettings: { allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', headerText: 'OrderDate', width: 150, foreignKeyValue: 'BirthDate', dataSource: employeeData, format: 'yMd',
            edit: {
                    create: function() { // to create input element
                        return ej.base.createElement('input');
                    },
                    read: function() { // return edited value to update data source
                        var value = new ej.data.DataManager(employeeData).executeLocal(new ej.data.Query().where(ej.grids.getDatePredicate({field: 'BirthDate', operator: 'equal',value: autoCompleteObj.value})));
                        return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
                    },
                    destroy: function() { // to destroy the custom component.
                        autoCompleteObj.destroy();
                    },
                    write: (args) => { // to show the value for date picker
                        autoCompleteObj = new ej.dropdowns.AutoComplete({
                            dataSource: employeeData,
                            fields: { value: args.column.foreignKeyValue },
                            value: args.foreignKeyData[0][args.column.foreignKeyValue]
                        });
                        autoCompleteObj.appendTo(args.element);
                    }
                }
        },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
        { field: 'ShipName', headerText: 'Ship Name', width: 180 }
    ],
    height: 315
});
grid.appendTo('#Grid');

