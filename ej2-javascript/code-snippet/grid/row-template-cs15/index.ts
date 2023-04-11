

import { Grid, ContextMenu, Page } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(ContextMenu, Page);

let grid: Grid = new Grid({
    dataSource: data,
    contextMenuItems: [{text: 'Copy with headers', target: '.e-content' id: 'copywithheader'}],
    allowSelection: true,
    allowPaging: true,
    contextMenuClick: function(args: MenuEventArgs){
        if(args.item.id === 'copywithheader'){
            grid.copy(true);
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Left', width: 125, isPrimaryKey: true },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 170 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' }
    ]
});
grid.appendTo('#Grid');




