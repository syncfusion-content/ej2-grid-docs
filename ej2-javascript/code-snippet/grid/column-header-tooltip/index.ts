import { Grid, Page} from '@syncfusion/ej2-grids';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },

    {
      field: 'Freight',
      headerText: 'Freight',
      textAlign: 'Right',
      width: 120,
      format: 'C2',
    },

    {
      field: 'ShipName',
      headerText: 'Ship Name',
      textAlign: 'Right',
      width: 145,
      format: 'yMd',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 140,
    },
  ],
});
grid.appendTo('#Grid');

let columnDescriptions: Object = {
  'Order ID': 'A unique number assigned to each order.',
  'Freight' : 'The cost of shipping the order.',
  'Ship Name': 'The name of the person or company who will receive the shipment.',
  'Ship Country': 'The country to which the shipment will be sent.',
  'Order Date': 'The date when the order was placed.',
};

let tooltip = new Tooltip({
  beforeRender: beforeRender,
  target: '.e-headertext',
});
tooltip.appendTo('#tooltip');

function beforeRender(args: TooltipEventArgs) {
  const description = (columnDescriptions as Object)[args.target.innerText];
  if (description) {
    (tooltip as Tooltip).content =
      args.target.innerText + ': ' + description;
  }
}