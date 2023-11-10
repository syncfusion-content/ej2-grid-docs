import { Grid, RowSelectEventArgs, Selection, Toolbar } from '@syncfusion/ej2-grids';
import { data, customerData } from './datasource.ts';

Grid.Inject(Selection, Toolbar);

type carType = { CustomerID: string; CustomerName: string; ContactName: string; };
let names: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
let masterdata: Object = customerData.filter((e: carType) => names.indexOf(e.CustomerID) !== -1);

let mastergrid: Grid = new Grid({
    dataSource: masterdata,
    toolbar: ['Print'],
    selectedRowIndex: 1,
    beforePrint: beforePrint,
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

function beforePrint(args) {
    let customElement = document.createElement('div');
    customElement.innerHTML = document.getElementsByClassName('e-statustext')[0].innerHTML + grid.element.innerHTML;
    customElement.appendChild(document.createElement('br'));
    args.element.append(customElement);
}

let grid: Grid = new Grid({
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', type: 'number' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
    ],
});
grid.appendTo('#DetailGrid');



