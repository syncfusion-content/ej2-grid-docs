loadCultureFiles();
ej.base.setCulture('ar');
ej.base.setCurrencyCode('QAR');

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
function loadCultureFiles() {
  var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json','numberingSystems.json'];
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