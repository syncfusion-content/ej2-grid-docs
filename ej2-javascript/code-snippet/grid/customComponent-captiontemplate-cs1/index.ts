

import { Grid, Group, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Group,Page);
    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true,
            dataBound: ()=> {
                let groupCations: HTMLCollection = document.getElementsByClassName('groupbutton');
                for(var i=0; i<groupCations.length; i++) {
                     var button = new Button({
                        isPrimary: true
                     });
                     button.appendTo(groupCations[i] as HTMLElement);
                }
            },
            height: 315
            allowGrouping: true,
            groupSettings: {columns: ["ShipCountry"], captionTemplate: "#captiontemplate"},
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
                { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
                { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
                { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
                { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
    grid.appendTo('#Grid');



