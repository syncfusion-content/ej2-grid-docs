ej.grids.Grid.Inject( ej.grids.Aggregate, ej.grids.PdfExport, ej.grids.ExcelExport, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowExcelExport: true,
  allowPdfExport: true,
  toolbar: ['ExcelExport', 'PdfExport', 'CsvExport'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
    { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
  ],
  height: 268,
  aggregates: [{
    columns: [{
      type: 'Custom',
      customAggregate: customAggregateFn,
      columnName: 'ShipCountry',
      footerTemplate: 'Brazil Count: ${Custom}'
    }]
  }]
});
grid.appendTo('#Grid');

grid.toolbarClick = (args) => {
  if (args.item.id === 'Grid_pdfexport') {
    grid.pdfExport();
  }
  if (args.item.id === 'Grid_excelexport') {
    grid.excelExport();
  }
  if (args.item.id === 'Grid_csvexport') {
    grid.csvExport();
  }
}

function customAggregateFn(data) {
  if (data.result)
    return data.result.filter(item => item['ShipCountry'] === 'Brazil').length;
  else {
    return data.filter(item => item['ShipCountry'] === 'Brazil').length;
  }
}


