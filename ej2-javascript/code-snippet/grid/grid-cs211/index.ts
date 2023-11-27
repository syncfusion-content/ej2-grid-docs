import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid, Toolbar, PdfExport, DetailRow, ClickEventArgs} from '@syncfusion/ej2-grids';
import { data,employeeData } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,DetailRow);

let grid: Grid = new Grid({
  dataSource: employeeData,
  allowPaging: true,
  pageSettings: { pageSize: 6 },
  allowPdfExport: true,
  toolbar: ['PdfExport'],
  columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
      { field: 'FirstName', headerText: 'First Name', width: 150 },
      { field: 'City', headerText: 'City', width: 150 },
      { field: 'Country', headerText: 'Country', width: 150 }
  ],
  childGrid : {
      dataSource: data,
      queryString: 'EmployeeID',
      columns: [
          {
              field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 90},
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 110 },
      ],
  },
  height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
  if (args.item.id === 'Grid_pdfexport') {
    // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
    let exportProperties = {
        hierarchyExportMode: dropDownColumn.value,
        // Assuming you have a dropdown list with id 'dropdownlist'
    };
    grid.pdfExport(exportProperties);
}
};

let dropdownData = [
  { text: 'Expanded', value: 'Expanded' },
  { text: 'All', value: 'All' },
  { text: 'None', value: 'None' }
];

let dropDownColumn: DropDownList = new DropDownList({
  value: 'None',
  popupHeight: '240px',
  width: 150,
  dataSource: dropdownData,
});
dropDownColumn.appendTo('#dropdown');