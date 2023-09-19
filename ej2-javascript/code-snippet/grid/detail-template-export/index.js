ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar, ej.grids.PdfExport);

var grid= new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    toolbar: ['PdfExport'],
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    exportDetailTemplate: exportDetailTemplate,
    columns: [
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'ProductID', headerText: 'Product ID', width: 120 },
        { field: 'Status', headerText: 'Status', width: 120 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        var exportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.pdfExport(exportProperties);
    }
}

function exportDetailTemplate(args) {
    args.value = {
        columnCount: 2,
        columnHeader: [
            {
                cells: [{
                    index: 0, colSpan: 2, value: 'Product Details',
                    style: { backColor: '#ADD8E6', excelHAlign: 'Center', pdfTextAlignment: 'Center' }
                }]
            }
        ],
        rows: [
            {
                cells: [
                    {
                        index: 0, rowSpan: 4, image: args.action === 'excelexport' ? {
                            base64: args.parentRow.data['ProductImg'],
                            height: 80, width: 80
                        } : { base64: args.parentRow.data['ProductImg'], width: 80 }
                    },
                    {
                        index: 1, value: "Offers: " + args.parentRow.data['Offers'],
                        style: { fontSize: 15, fontColor: '#0a76ff' }
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
                        style: { fontSize: 15, fontColor: '#0a76ff' }
                    }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['productDesc'],
                        style: { excelHAlign: 'Center', pdfTextAlignment: 'Center' }
                    },
                    { index: 1, value: args.parentRow.data['ReturnPolicy'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Cost'],
                        style: { excelHAlign: 'Center', pdfTextAlignment: 'Center' }
                    },
                    { index: 1, value: args.parentRow.data['Cancellation'] }
                ]
            },
            {
                cells: [
                    {
                        index: 0, value: args.parentRow.data['Status'],
                        style: {
                            fontSize: 15, fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                            pdfTextAlignment: 'Center', excelHAlign: 'Center'
                        }
                    },
                    {
                        index: 1, value: args.parentRow.data['Delivery'],
                        style: { fontSize: 15, fontColor: '#0a76ff' }
                    }
                ]
            }
        ],
    };
}

