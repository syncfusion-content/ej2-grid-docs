var grid = new ej.grids.Grid({
    dataSource: productData,
   columns: [
            {
                headerText: 'Discontinued', textAlign: 'Center',
                template: '#template', width: 120
            },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 100 },
            { field: 'ProductName', headerText: 'Name', width: 120 },
            { field: 'SupplierID', headerText: 'SupplierID', width: 100 },
            { field: 'UnitsInStock', headerText: 'Stock', width: 100, textAlign: 'Right' }
        ],
    height: 315
});
grid.appendTo('#Grid');

