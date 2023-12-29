import { Grid, Filter, Page, Selection, Sort } from '@syncfusion/ej2-grids';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2/data';

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
        filterSettings: { type: 'Excel', enableInfiniteScrolling: true, itemsCount: 40, loadingIndicator: 'Spinner' },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, width: 100 },
            { field: 'Employees', headerText: 'Employee Name', width: 120 },
            { field: 'Designation', headerText: 'Designation', width: 100 },
            {
                field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
                textAlign: 'Right', width: 100
            },
        ],
        pageSettings: { pageCount: 5 }
    });
grid.appendTo('#Grid');



