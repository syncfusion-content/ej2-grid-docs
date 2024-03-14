
import { Grid, Page}  from '@syncfusion/ej2-grids';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
import frFRLocalization from './locale.json';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject( Page );

L10n.load(frFRLocalization);

loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
);
setCulture('fr-FR'); // Change the Grid culture
setCurrencyCode('EUR');

let grid: Grid = new Grid({
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

var FrButton:Button = new Button({ cssClass: 'e-outline' }, '#frButton');
(document.getElementById('frButton') as HTMLElement).onclick = function() {
  setCulture('fr-FR'); // Change the Grid culture to French locale
  setCurrencyCode('EUR'); // Change the currency code based on French culture
};

var EnButton:Button = new Button({ cssClass: 'e-outline' }, '#enButton');
(document.getElementById('enButton') as HTMLElement).onclick = function() {
  setCulture('en-US'); // Change the Grid culture to English locale
  setCurrencyCode('USD'); // Change the currency code based on American English culture
}