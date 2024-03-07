import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { categoryData } from './datasource.ts';

Grid.Inject(Filter, Page);

let categoryIcons = {
  Beverages: 'fas fa-coffee',
  Condiments: 'fas fa-leaf',
  Confections: 'fas fa-birthday-cake',
  DairyProducts: 'fas fa-ice-cream',
  Grains: 'fas fa-seedling',
  Meat: 'fas fa-drumstick-bite',
  Produce: 'fas fa-carrot',
  Seafood: 'fas fa-fish',
};

let grid: Grid = new Grid({
  dataSource: categoryData,
  allowPaging: true,
  allowFiltering: true,
  filterSettings: { type: 'Excel' },
  height: 273,
  pageSettings: { pageSize: 6 },
  columns: [
    { field: 'CategoryName', headerText: 'CategoryName', width: 100, textAlign: 'Right', filter: { type: 'Excel', itemTemplate: function (args) {
      return ('<div><span class="' + categoryIcons[args.CategoryName] +'"></span>' + args.CategoryName +'</div>');
     }}},
  { field: 'Discontinued', headerText: 'Discontinued', width: 100, displayAsCheckBox: true },
  { field: 'ProductID', headerText: 'ProductID', width: 100 }
  ]
});
grid.appendTo('#Grid');