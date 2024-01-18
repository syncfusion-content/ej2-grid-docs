import { Grid, Aggregate, Edit, Toolbar, Group, Page, ChangeEventArgs, ActionEventArgs  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate, Edit, Toolbar, Group, Page);

let selectedRecord : Object = {};
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    toolbar: ['Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal' },
    actionBegin:(args: ActionEventArgs)=>{
        if(args.requestType === 'beginEdit'){
           selectedRecord ={};
           selectedRecord = args.rowData;
        };
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'OrderDate', width: 120, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', editType: 'numericedit', format: 'C2', edit: { params: { change: (args :ChangeEventArgs) => {
            selectedRecord['Freight'] = args.value; // Set the edited value to aggregate column
            grid.aggregateModule.refresh(selectedRecord) // Refresh aggregates using edited data
            }
           }
        }, width: 150},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
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