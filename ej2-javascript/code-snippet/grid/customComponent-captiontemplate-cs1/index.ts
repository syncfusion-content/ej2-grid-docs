import { ChipList } from '@syncfusion/ej2-buttons';
import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './data-source.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowGrouping: true,
    dataBound: dataBound,
    groupSettings: {  captionTemplate: '#captiontemplate' },
    columns: [
        { field: 'OrderID', headerText: 'ID',textAlign: 'Right',width: 90 },
        { field: 'CustomerID', headerText: 'Name',width: 100 },
        { field: 'ShipCity', headerText: 'City', width: 100 },
        { field: 'ShipName', headerText: 'Value', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function dataBound()
{
    let groupCations = document.getElementsByClassName('groupChip');
    for (let i = 0; i < groupCations.length; i++) {
      let chip = new ChipList({});
      chip.appendTo(groupCations[i] as HTMLElement);
    }
}