import { Grid, Filter, Page, Selection, Sort } from '@syncfusion/ej2-grids';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

Grid.Inject(Filter, Page, Selection, Sort);

const urlapi: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
});
let grid: Grid = new Grid(
    {
        dataSource: urlapi,
        query: new Query().addParams('dataCount', '10000'),
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        filterSettings: { type: 'Excel', enableInfiniteScrolling: true },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right' },
            { field: 'Employees', headerText: 'Employee Name', width: 150 },
            { field: 'Designation', headerText: 'Designation', width: 130, textAlign: 'Right' },
            { field: 'CurrentSalary', headerText: 'CurrentSalary', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        pageSettings: { pageCount: 5 }
    });
grid.appendTo('#Grid');



