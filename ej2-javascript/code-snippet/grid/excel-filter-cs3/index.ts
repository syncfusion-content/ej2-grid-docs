import { Grid, Filter, Page} from '@syncfusion/ej2-grids';
import { categoryData } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: categoryData,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    columns: [
      { field: 'CategoryName', headerText: 'Category Name', width: 120 },
      { field: 'Delivered', headerText: 'Delivered', width: 120, displayAsCheckBox: true, filter: { type: 'CheckBox', itemTemplate: function (args){
        return args.Delivered ? 'Delivered' : 'Not delivered';
    }}},
      { field: 'ProductID', headerText: 'Product ID', width: 120 },
    ],
    pageSettings: { pageSize: 6 },
    height: 273
});
grid.appendTo('#Grid');