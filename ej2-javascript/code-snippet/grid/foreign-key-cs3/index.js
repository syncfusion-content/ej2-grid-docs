ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Filter);
var dropInstance;
var grid = new ej.grids.Grid({
  dataSource: data,
  allowFiltering: true,
  filterSettings: { type: 'Menu' },
  columns: [
    {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 100,},
    {field: 'EmployeeID',headerText: 'Employee Name',width: 150,foreignKeyValue: 'FirstName',dataSource: fEmployeeData,
      filter: {
        ui: {
          create: function (args) {
            var flValInput = new ej.base.createElement('input', {
              className: 'flm-input',
            });
            args.target.appendChild(flValInput);
            this.dropInstance = new ej.dropdowns.DropDownList({
              dataSource: new ej.data.DataManager(fEmployeeData),
              fields: { text: 'FirstName', value: 'FirstName' },
              placeholder: 'Select a value',
              popupHeight: '200px',
            });
            this.dropInstance.appendTo(flValInput);
          },
          write: function (args) {
            this.dropInstance.value = args.filteredValue;
          },
          read: function (args) {
            args.fltrObj.filterByColumn(
              args.column.field,
              args.operator,
              this.dropInstance.value
            );
          },
        },
      },
    },
    { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right' },
    { field: 'ShipCity', headerText: 'Ship City', width: 180 },
  ],
  height: 315,
});
grid.appendTo('#Grid');