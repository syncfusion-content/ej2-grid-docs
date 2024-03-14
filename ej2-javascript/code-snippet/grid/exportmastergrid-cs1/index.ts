import { Grid, RowSelectEventArgs, Selection, Toolbar, ExcelExport, ExcelExportProperties } from '@syncfusion/ej2-grids';
import { data, customerData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Selection, Toolbar, ExcelExport);

type carType = { CustomerID: string; CustomerName: string; ContactName: string; };
let names: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
let masterdata: Object = customerData.filter((e: carType) => names.indexOf(e.CustomerID) !== -1);

let mastergrid: Grid = new Grid({
    dataSource: masterdata,
    toolbar: ['ExcelExport'],
    selectedRowIndex: 1,
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    columns: [
        { field: 'ContactName', headerText: 'Customer Name', width: 150 },
        { field: 'CompanyName', headerText: 'Company Name', width: 150 },
        { field: 'Address', headerText: 'Address', width: 150 },
        { field: 'Country', headerText: 'Country', width: 130 },
    ],
    rowSelected: rowSelected,
});
mastergrid.appendTo('#MasterGrid');

function rowSelected(args: RowSelectEventArgs): void {
    let selectedRecord: carType = args.data as carType;
    grid.dataSource = data.filter((record: carType) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    document.getElementById('key').innerHTML = selectedRecord.ContactName;
}

function toolbarClick(args:ClickEventArgs) {
    if (args.item.id === 'MasterGrid_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 },
        };
        let firstGridExport: Promise<any> = mastergrid.excelExport(appendExcelExportProperties, true);
        firstGridExport.then((fData: any) => {
            grid.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}

let grid: Grid = new Grid({
    allowSelection: false,
    allowExcelExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', type: 'number' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
    ],
});
grid.appendTo('#DetailGrid');