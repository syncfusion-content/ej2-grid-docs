ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Page, ej.grids.Selection, ej.grids.Sort);
var urlapi = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});
var grid = new ej.grids.Grid({
    dataSource: urlapi,
    query: new ej.data.Query().addParams('dataCount', '10000'),
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

