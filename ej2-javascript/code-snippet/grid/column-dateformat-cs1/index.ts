

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';

setCulture('es-AR');
setCurrencyCode('ARS');
loadCldr(cagregorian, currencies, numbers, timeZoneNames);

let formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };

let grid: Grid = new Grid({
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