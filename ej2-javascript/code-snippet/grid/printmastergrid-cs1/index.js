var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
var masterdata = customerData.filter(function(e){ 
    return names.indexOf(e.CustomerID) !== -1;
});

var mastergrid = new ej.grids.Grid({
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

function rowSelected(args){
    var selectedRecord = args.data;
    grid.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    document.getElementById('key').innerHTML = selectedRecord.ContactName;
}

function beforePrint(args) {
    var customElement = document.createElement('div');
    customElement.innerHTML = document.getElementsByClassName('e-statustext')[0].innerHTML + grid.element.innerHTML;
    customElement.appendChild(document.createElement('br'));
    args.element.append(customElement);
}

var grid = new ej.grids.Grid({
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