


import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230,
    dataBound: dataBound
});
grid.appendTo('#Grid');

function dataBound(args: any) {
    let cloned = this.addOnPersist;
    this.addOnPersist = function (key: any) {
        key = key.filter((item: string)  => item !== "columns");
        return cloned.call(this, key);
    };
}

document.getElementById('add').onclick = () => {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 }
    grid.columns.push(obj as any); //you can add the columns by using the Grid columns method
    grid.refreshColumns();
};

document.getElementById('remove').onclick = () => {
    grid.columns.pop();
    grid.refreshColumns();
};



