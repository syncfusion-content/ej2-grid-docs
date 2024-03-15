ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    dataBound:dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 120 }
    ],
});
grid.appendTo('#Grid');

function dataBound()
{
  fieldData=grid.getColumnFieldNames();
  dropdownColumnList.dataSource=fieldData;
}

var dropdownColumnList = new ej.dropdowns.DropDownList({
  width: 150,
  placeholder: 'Eg: OrderID',
  change: onFieldChange,
});
dropdownColumnList.appendTo('#dropdownColumn');

function onFieldChange(args) {
    dropdownOperatorsList.enabled = true;
    column = grid.getColumnByField(args.value);
    if (column) {    
      availableOperators = column.type === 'string' ? stringOperatorsData : numericOperatorsData;
        dropdownOperatorsList.dataSource=availableOperators;
    }
  }

var dropdownOperatorsList = new ej.dropdowns.DropDownList({
  width: 150,
  placeholder: 'Eg: equal',
  enabled: false,
  change: onOperatorChange,
});
dropdownOperatorsList.appendTo('#dropdownOperator');

function onOperatorChange(args) {
  filterOptions = { operator: args.value };
  column.filter = filterOptions;
}