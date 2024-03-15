import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { TextBox } from '@syncfusion/ej2-inputs';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 230
});

let textbox: TextBox = new TextBox({
    placeholder: 'Enter file name',
    width: 120
});
textbox.appendTo('#textbox-input');

grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            fileName: textbox.value !== "" ? textbox.value + '.xlsx' : 'new.xlsx'
        };
        grid.excelExport(excelExportProperties);
    }
}
grid.appendTo('#Grid');