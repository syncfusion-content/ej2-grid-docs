import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import { Grid, Group, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import deDELocalization from './locale.json'

L10n.load(deDELocalization);

Grid.Inject(Group, Page);

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);

setCulture('de-DE');
setCurrencyCode('EUR');

let formatOptions={ format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 };
let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: formatOptions , width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');