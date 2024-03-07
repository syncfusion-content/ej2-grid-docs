import { Grid, Aggregate, Edit, Toolbar, Group, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate, Edit, Toolbar, Group, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    toolbar: ['Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Batch' },
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
    columns: [
        { field: "OrderID", headerText: "Order ID", isPrimaryKey: true, textAlign: "Right", width: 120 },
        { field: "CustomerID", headerText: "Customer ID", width: 150 },
        { field: "OrderDate", headerText: "OrderDate", width: 120, format: "yMd" },
        { field: "Freight", headerText: "Freight", width: 150, format: "C2",editType:"numericedit" },
        { field: "ShipCountry", headerText: "Ship Country", width: 150 },
        { field: "ShipCity", headerText: "Ship City", width: 150 },
    ],
    height: 268,
    aggregates: [{
        columns: [{
          type:'Sum',
          field:'Freight',
          format:'C2',
          footerTemplate:'Sum : ${Sum}'
        }]
    },
    {
        columns:[{
            type: 'Average',
            field:'Freight',
            format:'C2',
            groupCaptionTemplate:'Average : ${Average}'
        }]
    },
    {
        columns:[{
            type:'Sum',
            field:'Freight',
            format:'C2',
            groupFooterTemplate:'Sum : ${Sum}'
        }]
    }
    ]
});
grid.appendTo('#Grid');