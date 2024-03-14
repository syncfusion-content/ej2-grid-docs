import { Grid, Toolbar, ExcelExport, ClickEventArgs, ExcelHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
  dataSource: inventoryData,
  allowPaging: true,
  toolbar: ['ExcelExport'],
  allowExcelExport: true,
  toolbarClick: toolbarClick,
  excelQueryCellInfo: excelQueryCellInfo,
  columns: [
      { field: 'Inventor', headerText: 'Inventor Name', width: '180', textAlign: 'Right' },
      { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: '180', textAlign: 'Right' },
      { field: 'Country', headerText: 'Country', width: '140', textAlign: 'Left' },
      { field: 'Mainfieldsofinvention', headerText: 'Main fields of invention', width: '200', textAlign: 'Left' },
      { field: 'Number of INPADOC patents', headerText: 'Number of INPADOC patents', width: '180', textAlign: 'Right' },
      { field: 'TotalPatents', headerText: 'Total Patents', valueAccessor: valueAccess, visible: false, width: '120', textAlign: 'Right' }
  ],
  height: '272px'
});
grid.appendTo('#Grid');

function valueAccess(field, data) {
  var cell = inventoryData.indexOf(data) + 2;
  return '=E' + cell + '+' + 'B' + cell;
}

function excelQueryCellInfo(args:ExcelHeaderQueryCellInfoEventArgs ) {
  if (args.column.field === 'TotalPatents') {
      args.value = valueAccess(args.column.field, args.data);
      args.cell.formula = args.value;
  }
}   

function toolbarClick(args: ClickEventArgs) {
  if (args.item.id === 'Grid_excelexport') {
      var excelExportProperties = {
          includeHiddenColumn: true
      };
      grid.excelExport(excelExportProperties);
  }
}
