import { Grid, Filter, Page, Selection, Sort } from '@syncfusion/ej2-grids';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2/data';

Grid.Inject(Filter, Page, Selection, Sort);

const urlapi: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/js/release/api/UrlDataSource',
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
            { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, width: '120' },
            { field: 'Employees', headerText: 'Employee Name', width: '150' },
            { field: 'Designation', headerText: 'Designation', width: '130' },
            {
                field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
                textAlign: 'Right', width: '120'
            },
        ],
        pageSettings: { pageCount: 5 }
    });
grid.appendTo('#Grid');


