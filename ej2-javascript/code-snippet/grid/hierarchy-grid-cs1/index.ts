import { Grid, DetailRow, RowDataBoundEventArgs, Page } from '@syncfusion/ej2-grids';
import { childData, employeeData } from './datasource.ts';
import { DataManager, Query } from '@syncfusion/ej2-data';

Grid.Inject(DetailRow, Page);

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowDataBound:rowDataBound,
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
      { field: 'FirstName', headerText: 'First Name', width: 100 },
      { field: 'City', headerText: 'City', width: 120 },
      { field: 'Country', headerText: 'Country', width: 120 }
    ],
    childGrid: {
        dataSource: childData,
        queryString: 'EmployeeID',
        allowPaging: true,
        columns: [
            { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    height: 265
});
grid.appendTo('#Grid');

function rowDataBound(args: RowDataBoundEventArgs){
   let parentData: number = (args.data)['EmployeeID'];
   let childrecord: object[] = new DataManager(childData as JSON[]).
        executeLocal(new Query().where('EmployeeID', 'equal', parentData, true));
    if (childrecord.length === 0) {
        // Here hide which parent row has no child records
       let rowElement = args.row as HTMLTableRowElement;
       let cellElement= rowElement.querySelector('td') as HTMLTableCellElement
        cellElement.innerHTML = ' '; 
        cellElement.className = 'e-customizedexpandcell';
    }
}