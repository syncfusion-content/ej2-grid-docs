import { Grid, Group } from '@syncfusion/ej2-grids';
import { L10n,setCulture} from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

Grid.Inject(Group);
setCulture('ar');

L10n.load({
    ar: {
      grid: {
        GroupDropArea: 'اسحب رأس العمود هنا لتجميع العمود',
        Item: 'بند',
        Items: 'العناصر',
        GroupCaption: ' هي خلية تسمية توضيحية جماعية',
      },
    },
});

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'ID',textAlign: 'Right',width: 90 },
        { field: 'CustomerID', headerText: 'Name',width: 100 },
        { field: 'ShipCity', headerText: 'City', width: 100 },
        { field: 'ShipName', headerText: 'Value', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');