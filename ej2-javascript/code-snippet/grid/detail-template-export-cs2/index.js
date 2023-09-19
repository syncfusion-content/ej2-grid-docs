ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar, ej.grids.ExcelExport);

var grid= new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    exportDetailTemplate: exportDetailTemplate,
    columns: [
        { field: 'Category', headerText: 'Category', width: 120 },
        { field: 'ProductID', headerText: 'Product ID', width: 140 },
        { field: 'Status', headerText: 'Status', width: 200 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
        var exportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.excelExport(exportProperties);
    }
}

function exportDetailTemplate(args) {
    args.value = {
        columnHeader: [
            {
                cells: [{
                    index: 0, colSpan: 2, value: 'Product Details',
                    style: { backColor: '#ADD8E6', excelHAlign: 'Center', bold: true }
                }]
            }
        ],
        rows: [
            {
                cells: [
                    {
                        index: 0, rowSpan: 4, image: {
                            base64: args.parentRow.data['ProductImg'],
                            height: 80, width: 100
                        }
                    },
                    {
                        index: 1, value: "Offers: " + args.parentRow.data['Offers'],
                        style: { bold: true, fontColor: '#0a76ff' }
                    },
                ]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Available: ' + args.parentRow.data['Available']
                    }]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Contact: ',
                        hyperLink: {
                            target: 'mailto:' + args.parentRow.data['Contact'],
                            displayText: args.parentRow.data['Contact']
                        }
                    }]
            },
            {
                cells: [
                    {
                        index: 1, value: 'Ratings: ' + args.parentRow.data['Ratings'],
                        style: { bold: true, fontColor: '#0a76ff' }
                    }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['productDesc'],
                        style: { excelHAlign: 'Center' }
                    },
                    { index: 1, value: args.parentRow.data['ReturnPolicy'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Cost'],
                        style: { excelHAlign: 'Center', bold: true }
                    },
                    { index: 1, value: args.parentRow.data['Cancellation'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Status'],
                        style: {
                            bold: true, fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                            excelHAlign: 'Center'
                        }
                    },
                    {
                        index: 1, value: args.parentRow.data['Delivery'],
                        style: { bold: true, fontColor: '#0a76ff' }
                    }
                ]
            }
        ],
    };
}

