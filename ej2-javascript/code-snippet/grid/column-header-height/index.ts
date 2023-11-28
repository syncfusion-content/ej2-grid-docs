import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'Freight',headerText:'Freight', format: 'C2', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 140 },
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

(<HTMLElement>document.getElementById('changeHeight')).onclick = function (event) {
    let heightMap = { small: '20px', medium: '42px', big: '60px' };
    let headerCells = (grid).getHeaderContent().querySelectorAll('.e-headercell');
    headerCells.forEach((headerCell: HTMLElement) => {
        (headerCell as HTMLElement).style.height = (heightMap)[
            (event.target as HTMLButtonElement).id
        ];
    });
}
