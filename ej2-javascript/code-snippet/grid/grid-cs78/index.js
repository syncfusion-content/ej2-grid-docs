loadLocalizationData();
function loadLocalizationData() {
    var fetch = new ej.base.Fetch('./locale.json', 'GET', false);
    fetch.onSuccess = function(deDELocalization) {
      ej.base.L10n.load(deDELocalization );
      loadCultureFiles(); 
    };
    fetch.send();
 }

var formatOptions={ format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 };
  var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: formatOptions , width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
  });
  grid.appendTo('#Grid');

function loadCultureFiles() {
  var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json', 'numberingSystems.json'];
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
        ej.base.setCulture('de-DE'); // Change the Grid culture
        ej.base.setCurrencyCode('EUR');
      };
    fetch.send();
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}