ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Filter);
var dropInstance;
var grid = new ej.grids.Grid({
  dataSource: data,
  allowFiltering: true,
  filterSettings: { type: 'Menu' },
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
      dataSource: fEmployeeData,
      filter: filter,
    },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80 },
    { field: 'ShipCity', headerText: 'Ship City', width: 130 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

function filter() 
{
      create = () => 
      {
        let flValInput = ej.base.createElement('input', {
          className: 'flm-input',
        });
          args.target.appendChild(flValInput);
          dropInstance = new ej.dropdowns.DropDownList({
            dataSource: new ej.data.DataManager(fEmployeeData),
            fields: { text: 'FirstName', value: 'EmployeeID' },
            placeholder: 'Select a value',
            popupHeight: '200px',
          });
          dropInstance.appendTo(flValInput);
      },
      write = (args) =>
      {
        dropInstance.text = args.filteredValue || '';
      },
      read = (args) =>
      {
        args.fltrObj.filterByColumn(
          args.column.field,
          args.operator,
          dropInstance.text
        );
      }     
}
