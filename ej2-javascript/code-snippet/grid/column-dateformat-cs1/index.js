loadCultureFiles();
var formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };

var grid = new ej.grids.Grid({
    dataSource: data,
    locale: 'es-AR',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: 150 },
      { field: 'OrderDate', headerText: 'OrderDate', format: formatOptions, textAlign: 'Right', width: 150 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 315,
});
grid.appendTo('#Grid');

function loadCultureFiles() {
  var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json'];
  var loadCulture = function (prop) {
    var fetch = new ej.base.Fetch('./' + files[prop], 'GET', false);
    fetch.onSuccess = function (response) {
        if (typeof response=== 'object') {
         // If the response is an object, convert it to a JSON string
          var jsonString = JSON.stringify(response);
          ej.base.loadCldr(JSON.parse(jsonString));
        } else if (typeof response=== 'string') {
          // If the response is already a JSON string, parse and load it
          ej.base.loadCldr(JSON.parse(response));

        } else {
          console.error('Invalid responsetype received:', response);
        }
        ej.base.setCulture('es-AR');
        ej.base.setCurrencyCode('ARS');
      };
    fetch.send();
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}