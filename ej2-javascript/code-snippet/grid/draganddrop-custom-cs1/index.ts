

import { Grid, Page, RowDD, Selection } from '@syncfusion/ej2-grids';
import { TreeView } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection);
let hierarchicalData: { [key: string]: Object }[];
let grid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'tree' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowDrop: function(args:any){
            let currLi: Element = args.target.closest('li');
            let gridData: any = args.data;
            if(currLi !=null && closest(currLi, '.' + 'e-control').classList.contains('e-treeview')){
                if(gridData != null){
                    let grid: any = (<any>document.getElementById('Grid')).ej2_instances[0];
                    let tree: any = (<any>document.getElementById('tree')).ej2_instances[0];
                    for(let i:number = 0, len = gridData.length; i < len; i++){
                        let obj: any = [{ nodeId:gridData[i].OrderID,nodeText:gridData[i].CustomerID }];
                        (grid as any).deleteRow(args.rows[i]);
                        tree.addNodes(obj,currLi);
                    }
                    args.cancel=true;
                }
            }
        }  
});
grid.appendTo('#Grid');

let treeObj: TreeView = new TreeView({
    fields: { dataSource: hierarchicalData, id: 'nodeId', text: 'nodeText',  
            child: 'nodeChild'
        },
    });
    treeObj.appendTo('#tree');



