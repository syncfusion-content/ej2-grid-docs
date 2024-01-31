

import { Grid, Aggregate, Edit, Toolbar, Group, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate, Edit, Toolbar, Group, Page);

let selectedRecord : Object = {};
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:7},
    toolbar: ['Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal' },
    actionBegin:(args:any)=>{
        if(args.requestType === 'beginEdit'){
           selectedRecord ={};
           selectedRecord = args.rowData;
        };
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', editType: 'numericedit', format: 'C2', edit: { params: { change: (args :any) => {
            let gridObj = document.getElementById('Grid')['ej2_instances'][0];
            selectedRecord['Freight'] = args.value; // Set the edited value to aggregate column
            gridObj.aggregateModule.refresh(selectedRecord) // Refresh aggregates using edited data
            }
           }
        }, width: 150},
       { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
    ],
    height: 268,
    aggregates: [{
        columns:[{
          type:'Sum',
          field:'Freight',
          format:'C2',
          footerTemplate:'Sum : ${Sum}'
        }]
    }]
});
grid.appendTo('#Grid');



