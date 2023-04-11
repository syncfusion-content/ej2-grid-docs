


import { Grid, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey:true  },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('add').onclick = () => {
    grid.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari"  });
};

document.getElementById('edit').onclick = () => {
    grid.startEdit();
};

document.getElementById('delete').onclick = () => {
    grid.deleteRecord();
};

document.getElementById('updaterow').onclick = () => {
    grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'  });
};

document.getElementById('updatecell').onclick = () => {
    grid.setCellValue((grid.currentViewData[0] as any).OrderID,'CustomerID','Value Changed');
};



