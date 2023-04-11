

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let country: { [key: string]: Object }[] = [
    { ShipCountry: 'United States', countryId: '1' },
    { ShipCountry: 'Australia', countryId: '2' },
    { ShipCountry: 'India', countryId: '2' }
];

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 120, editType: 'dropdownedit', edit: {
                params: {
                    query: new Query(),
                    dataSource: country,
                    fields: { value: 'ShipCountry', text: 'ShipCountry' },
                    allowFiltering: true
                }
            }
        }
    ],
    height: 265
});
grid.appendTo('#Grid');



