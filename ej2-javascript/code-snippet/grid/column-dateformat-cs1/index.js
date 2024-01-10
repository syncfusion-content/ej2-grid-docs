loadCultureFiles();
ej.base.setCulture('es-AR');
ej.base.setCurrencyCode('ARS');

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
function loadCultureFiles() {
  var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json'];
  var loader = ej.base.loadCldr;
  var loadCulture = function (prop) {
      var val, ajax;
      ajax = new ej.base.Ajax('./' + files[prop], 'GET', false);
      ajax.onSuccess = function (value) {
          val = value;
      };
      ajax.send();
      loader(JSON.parse(val));
  };
  for (var prop = 0; prop < files.length; prop++) {
      loadCulture(prop);
}}
grid.appendTo('#Grid');