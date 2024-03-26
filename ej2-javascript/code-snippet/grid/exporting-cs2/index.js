var grid = new ej.grids.Grid({
        dataSource: data,
        toolbar: ['ExcelExport'],
        allowExcelExport: true,
        toolbarClick: toolbarClick,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'ShipCity', headerText: 'Ship City', width: 120 },
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 270
    });
    grid.appendTo('#Grid');
    
    function toolbarClick(args) {
        if (args.item.id === 'Grid_excelexport') {
            // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
            var excelExportColumns = [
                { field: 'OrderID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
                { field: 'Freight', textAlign: 'Center', width: 120 }
            ];
            var excelExportProperties = {
                columns: excelExportColumns
            };
            grid.excelExport(excelExportProperties);
        }
    }
    