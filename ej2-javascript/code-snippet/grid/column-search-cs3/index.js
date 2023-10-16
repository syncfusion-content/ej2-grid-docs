ej.grids.Grid.Inject(ej.grids.Toolbar);
var key = "";
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipCountry', headerText: 'ShipCountry', width: 100 },
      { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    ],
    height: 400,
    actionBegin: args => {
    if (args.requestType === 'searching') {
      key = args.searchString.toLowerCase();
    }
  },
  queryCellInfo: args => {
    if (key != '') {
      var cellContent = args.data[args.column.field];
      var parsedContent = cellContent.toString().toLowerCase();
      if (parsedContent.includes(key.toLowerCase())) {
        var i = 0;
        var searchStr = '';
        while (i < key.length) {
          var index = parsedContent.indexOf(key[i]);
          searchStr = searchStr + cellContent.toString()[index];
          i++;
        }
        args.cell.innerHTML = args.cell.innerText.replaceAll(
          searchStr,
          "<span class='customcss'>" + searchStr + '</span>'
        );
      }
    }
  }
});
grid.appendTo('#Grid');