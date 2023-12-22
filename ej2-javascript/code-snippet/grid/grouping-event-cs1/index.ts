import { Grid, Group,GroupEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort);

let grid: Grid = new Grid({
  dataSource: data,
  allowGrouping: true,
  actionComplete: actionComplete,
  actionBegin: actionBegin,
  columns: [
    { field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 120},
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 267,
});
grid.appendTo('#Grid');

function actionBegin(args: GroupEventArgs) 
{
  if (args.requestType === 'grouping' && args.columnName === 'OrderID') 
  {
    args.cancel = true;
  }
}

let message = document.getElementById('message');

function actionComplete(args: GroupEventArgs) {
  if(args.requestType === 'grouping')
  {
    (message as HTMLElement).innerHTML = args.requestType + ' action completed for ' + args.columnName + ' column';
  } else 
  {
    (message as HTMLElement).innerHTML = '';
  }
}
