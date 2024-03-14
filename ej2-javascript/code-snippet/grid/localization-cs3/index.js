loadLocalizationData();
function loadLocalizationData() {
var fetch = new ej.base.Fetch('./locale.json', 'GET', false);
fetch.onSuccess = function (frFRLocalization) {
  ej.base.L10n.load(frFRLocalization );
  loadCultureFiles(); 
};
fetch.send();
}

  var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 90 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
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
        ej.base.setCulture('fr-FR'); // Change the Grid culture
        ej.base.setCurrencyCode('EUR');
      };
    fetch.send();
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}

var FrButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#frButton');
document.getElementById('frButton').onclick = function() {
  ej.base.setCulture('fr-FR'); // Change the Grid culture to French locale
  ej.base.setCurrencyCode('EUR'); // Change the currency code based on French culture
};

var EnButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#enButton');
document.getElementById('enButton').onclick = function() {
  ej.base.setCulture('en-US'); // Change the Grid culture to English locale
  ej.base.setCurrencyCode('USD'); // Change the currency code based on American English culture
}