import { Grid, Sort} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json';

Grid.Inject(Sort);

setCulture('ar');
setCurrencyCode('QAR');
loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);

let formatOptions = { type: 'date', format: 'yyyy/MMM/dd' };
let sortComparer = (reference: number | Date | string, comparer: number | Date | string, sortOrder: 'Ascending' | 'Descending') => {
    let referenceDate = new Date(reference);
    let comparerDate = new Date(comparer);
    if (typeof reference === 'number' && typeof comparer === 'number') {
        // Numeric column sorting
        return sortOrder === 'Ascending' ? comparer - reference : reference - comparer;
    } else if (!isNaN(referenceDate.getTime()) && !isNaN(comparerDate.getTime())) {
        // Date column sorting
        return sortOrder === 'Ascending' ? comparerDate.getTime() - referenceDate.getTime() : referenceDate.getTime() - comparerDate.getTime();
    }
    else {
        // Default sorting for other types
        let intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
        let comparisonResult = intlCollator.compare(String(reference), String(comparer));
        return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
    }
};

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting:true,
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

