loadCultureFiles();
var formatOptions = { type: 'date', format: 'yyyy/MMM/dd' };
var sortComparer = (reference, comparer, sortOrder) => {
    const referenceDate = new Date(reference);
    const comparerDate = new Date(comparer);
    if (typeof reference === 'number' && typeof comparer === 'number') {
        // Numeric column sorting
        return sortOrder === 'Ascending' ? comparer - reference : reference - comparer;
    } else if (!isNaN(referenceDate.getTime()) && !isNaN(comparerDate.getTime())) {
        // Date column sorting
        return sortOrder === 'Ascending' ? comparerDate.getTime() - referenceDate.getTime() : referenceDate.getTime() - comparerDate.getTime();
    }
    else {
        // Default sorting for other types
        const intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
        const comparisonResult = intlCollator.compare(String(reference), String(comparer));
        return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
    }
};
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    locale: 'ar',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, sortComparer: sortComparer },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100,sortComparer: sortComparer },
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: 80, sortComparer: sortComparer },
        { field: 'OrderDate', headerText: 'OrderDate', format: formatOptions, textAlign: 'Right', width: 120,sortComparer: sortComparer },
    ],
    height: 315,
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
        ej.base.setCulture('ar');
        ej.base.setCurrencyCode('QAR');
      };
    fetch.send();
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}