ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        width: 120,
        textAlign: 'Right',
        filter: {
          ui: {
            create: function (args) {
              var dp = new ej.data.DataManager(data);
              var input = new ej.base.createElement('input', {
                className: 'flm-input',
              });
              args.target.appendChild(input);
              dropInstance = new ej.dropdowns.MultiSelect({
                dataSource: new ej.data.DataManager(data),
                fields: { text: 'OrderID', value: 'OrderID' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                allowFiltering: true,
                mode: 'CheckBox',
              });
              dropInstance.appendTo(input);
            },
            write: function (args) {
              var grid = document.getElementById('Grid').ej2_instances[0];
              var filteredValue = [];
              grid.filterSettings.columns.map((item) => {
                if (item.field === 'OrderID' && item.value) {
                  filteredValue.push(item.value);
                }
              });
              if (filteredValue.length > 0) {
                dropInstance.value = filteredValue;
              }
            },
            read: function (args) {
              var grid = document.getElementById('Grid').ej2_instances[0];
              grid.removeFilteredColsByField(args.column.field);

              args.fltrObj.filterByColumn(
                args.column.field,
                'contains',
                dropInstance.value
              );
            },
          },
        },
      },
      { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        format: { type: 'dateTime', format: 'M/d/y hh:mm a' },
        textAlign: 'Right',
      },
      { field: 'Freight', width: 110, format: 'C2', textAlign: 'Right' },
    ],
    pageSettings: { pageCount: 5 },
  });
  grid.appendTo('#Grid');
  

