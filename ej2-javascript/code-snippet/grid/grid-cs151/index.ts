import { Grid, Toolbar, PdfExport,  Aggregate, ClickEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100}
    ],
    height: 272,
    aggregates: [{
                    columns: [{
                        type: 'Custom',
                        customAggregate: customAggregateFn,
                        columnName: 'ShipCountry',
                        footerTemplate: 'Brazil Count: ${Custom}'
                    }]
    }]
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        (grid as Grid).pdfExport();
    }
}

function customAggregateFn(customData: Item[]) {
    let data: Item[];

    if ('result' in customData && Array.isArray(customData.result)) {
        data = customData.result;
    } else {
        data = customData as Item[];
    }

    let brazilCount = data.filter(item => item.ShipCountry === 'Brazil').length;
    return `${brazilCount}`;
}

interface Item {
    OrderID: number;
    CustomerID: string;
    ShipCity: string;
    ShipCountry: string;
}