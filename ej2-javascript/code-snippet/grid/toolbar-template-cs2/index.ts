import { Grid, Toolbar, Group } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';
import { ClickEventArgs, Toolbar as ToolbarItems } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, Group);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    var target: Element = (<HTMLElement>args.originalEvent.target).closest('button'); // find clicked button
    if (target.id === 'collapse') {
        // collapse all expanded grouped row
        grid.groupModule.collapseAll();
    }
    if (target.id === 'expand') {
        // expand all collapsed grouped row
        grid.groupModule.expandAll();
    }
};
let toolbar: ToolbarItems= new ToolbarItems({
    items: [
      { id:"collapse", text:"Collapse All", prefixIcon:"e-chevron-up icon" },
      { id:"expand", text:"Expand All", prefixIcon:"e-chevron-down icon" },
      ]
});
toolbar.appendTo('#toolbar-template');

let grid: Grid = new Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    toolbarClick: clickHandler,
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 200
});
grid.appendTo('#Grid');