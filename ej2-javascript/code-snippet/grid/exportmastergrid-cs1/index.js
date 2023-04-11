var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
var masterdata = customerData.filter(function(e){ 
    return names.indexOf(e.CustomerID) !== -1;
});

var mastergrid = new ej.grids.Grid({
    dataSource: masterdata,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    selectedRowIndex: 1,
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

function rowSelected(args){
    let selectedRecord = args.data;
    grid.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    document.getElementById('key').innerHTML = selectedRecord.ContactName;
}

function toolbarClick(args) {
    if (args.item.id === 'MasterGrid_excelexport') {
        const appendExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 },
        };
        const firstGridExport = mastergrid.excelExport(appendExcelExportProperties, true);
        firstGridExport.then((fData) => {
            grid.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}

var grid = new ej.grids.Grid({
    allowSelection: false,
    allowExcelExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', type: 'number' },
        { field: 'ShipName', headerText: 'Ship Name', width: 200 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 200 },
    ],
});
grid.appendTo('#DetailGrid');

