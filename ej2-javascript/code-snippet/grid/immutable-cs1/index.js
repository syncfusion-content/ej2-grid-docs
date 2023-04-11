ej.grids.Grid.Inject(ej.grids.Page);
var immutableStart;
var normalStart;
var primaryKey = 0;
var immutableInit = true;
var init = true;
var immutableGrid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 50 },
    enableImmutableMode: true,
    beforeDataBound: function() {
        immutableStart = new Date().getTime();
    },
    dataBound: function() {
        var val = immutableInit ? '' : new Date().getTime() - immutableStart;
        document.getElementById('immutableDelete').innerHTML = 'Immutable rendering Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
        immutableStart = 0; immutableInit = false;
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 160 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
    ],
    height: 240
});
immutableGrid.appendTo('#immutable');

document.getElementById('delete').addEventListener('click', function(e) {
    immutableGrid.dataSource.splice(0, 5);
    normalGrid.setProperties({ dataSource: immutableGrid.dataSource });
    immutableGrid.setProperties({ dataSource: immutableGrid.dataSource });
});

document.getElementById('addtop').addEventListener('click', function(e) {
    var addedRecords = [
            {'OrderID': ++primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri'},
            {'OrderID': ++primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer'},
            {'OrderID': ++primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon'},
            {'OrderID': ++primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson'},
            {'OrderID': ++primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti'}
        ]
    var aData = addedRecords.concat(immutableGrid.dataSource);
    normalGrid.setProperties({ dataSource: aData });
    immutableGrid.setProperties({ dataSource: aData });
});

document.getElementById('addbottom').addEventListener('click', function(e) {
    var addedRecords = [
            {'OrderID': ++primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri'},
            {'OrderID': ++primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer'},
            {'OrderID': ++primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon'},
            {'OrderID': ++primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson'},
            {'OrderID': ++primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti'}
        ]
    var aData = immutableGrid.dataSource.concat(addedRecords);
    normalGrid.setProperties({ dataSource: aData });
    immutableGrid.setProperties({ dataSource: aData });
});

document.getElementById('reverse').addEventListener('click', function(e) {
    var aData = immutableGrid.dataSource.reverse();
    normalGrid.setProperties({ dataSource: aData });
    immutableGrid.setProperties({ dataSource: aData });
});

document.getElementById('paging').addEventListener('click', function(e) {
    var totalPage = immutableGrid.dataSource.length / immutableGrid.pageSettings.pageSize;
    var page = Math.floor(Math.random() * totalPage) + 1;
    normalGrid.setProperties({ pageSettings: { currentPage: page } });
    immutableGrid.setProperties({ pageSettings: { currentPage: page } });
});

var normalGrid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 50 },
    beforeDataBound: function() {
        normalStart = new Date().getTime();
    },
    dataBound: function() {
        var val = init ? '' : new Date().getTime() - normalStart;
        document.getElementById('normalDelete').innerHTML = 'Normal rendering Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
        normalStart = 0; init = false;
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 160 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
    ],
    height: 240
});
normalGrid.appendTo('#normal');


