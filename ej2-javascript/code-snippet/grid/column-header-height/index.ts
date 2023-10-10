import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,

    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120 },
        { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
        { field: 'Freight', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd' },
    ]
});
grid.appendTo('#Grid');

let button: Button = new Button(
    {
        content: 'CHANGE HEIGHT TO 20PX',
    }
)
button.appendTo('#small');
let button1: Button = new Button(
    {
        content: 'DEFAULT HEIGHT TO 42PX',
    }
);
button1.appendTo('#medium');
let button3: Button = new Button(
    {
        content: 'CHANGE HEIGHT TO 60PX',
    }
);
button3.appendTo('#big');

(document as any).getElementById('changeHeight').onclick = function (event) {
    const heightMap = { small: '20px', medium: '42px', big: '60px' };
    const headerCells = (grid).getHeaderContent().querySelectorAll('.e-headercell');
    headerCells.forEach((headerCell) => {
        ((headerCell) as any).style.height = (heightMap)[
            (event.target as any).id
        ];
    });
}

