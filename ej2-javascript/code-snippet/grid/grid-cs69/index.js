var filter = {
  ui: {
    create: function (args) {
      var flValInput = ej.base.createElement('input', {
        className: 'flm-input',
      });
      args.target.appendChild(flValInput);
      var fieldName = args.column.field;
      var dropdownData = ej.data.DataUtil.distinct(data, fieldName);
      dropInstance = new ej.dropdowns.MultiSelect({
        dataSource: dropdownData,
        placeholder: 'Select a value',
        popupHeight: '200px',
        allowFiltering: true,
        mode: 'Delimiter',
      });
      dropInstance.appendTo(flValInput);
    },
    write: function (args) {
      var fieldName = args.column.field;
      var filteredValue = [];
      grid.filterSettings.columns.forEach((item) => {
        if (item.field === fieldName && item.value) {
          filteredValue.push(item.value);
        }
      });
      if (filteredValue.length > 0) {
        dropInstance.value = filteredValue;
      }
    },
    read: function (args) {
      grid.removeFilteredColsByField(args.column.field);
      args.fltrObj.filterByColumn(
        args.column.field,
        args.operator,
        dropInstance.value
      );
    },
  },
};
var grid = new ej.grids.Grid({
  dataSource: data,
  allowFiltering: true,
  allowPaging: true,
  filterSettings: { type: 'Menu' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', filter: filter, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', filter: filter, width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', filter: filter, width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', filter: filter, width: 100 }
  ],
  height: 273,
});
grid.appendTo('#Grid');