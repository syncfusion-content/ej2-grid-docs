import { Grid, Filter, Column, Page, PredicateModel } from '@syncfusion/ej2-grids';
import { createElement } from '@syncfusion/ej2-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let filter = {
  ui: {
    create: (args: { target: Element; column: object }) => {
      let flValInput: HTMLElement = createElement('input', {
        className: 'flm-input',
      });
      args.target.appendChild(flValInput);
      let fieldName: string = (args.column as Column).field;
      let dropdownData: string[] = DataUtil.distinct( data, fieldName) as string[];
      this.dropInstance = new MultiSelect({
        dataSource: dropdownData,
        placeholder: 'Select a value',
        popupHeight: '200px',
        allowFiltering: true,
        mode: 'Delimiter',
      });
      this.dropInstance.appendTo(flValInput);
    },
    write: (args:{column:Column}) => {
      let fieldName: string = args.column.field;
      let filteredValue: string[] = [];
      grid.filterSettings.columns.forEach((item: PredicateModel) => {
        if (item.field === fieldName && item.value) {
          filteredValue.push(item.value as string);
        }
      });
      if (filteredValue.length > 0) {
        (this.dropInstance as MultiSelect).value = filteredValue;
      }
    },
    read: (args: { column: Column; operator: string; fltrObj: Filter }) => {
      grid.removeFilteredColsByField(args.column.field);
      args.fltrObj.filterByColumn(
        args.column.field,
        args.operator,
        this.dropInstance.value as string[]
      );
    },
  },
};
let grid: Grid = new Grid({
  dataSource: data,
  allowFiltering: true,
  allowPaging: true,
  filterSettings: { type: 'Menu' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', filter: filter, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', filter: filter, width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', filter: filter, width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', filter: filter, width: 100 },
  ],
  height:273
});
grid.appendTo('#Grid');