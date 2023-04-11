ej.grids.Grid.Inject(ej.grids.RowDD);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'tree' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID',isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowDrop: function(args){
            var currLi = args.target.closest('li');
            var gridData = args.data;                  
            if(currLi !=null && closest(currLi, '.' + 'e-control').classList.contains('e-tree'))
            {
                if(gridData != null){
                    var grid = (document.getElementById('Grid')).ej2_instances[0];
                    var tree = (document.getElementById('tree')).ej2_instances[0];
                    for(var i = 0, len = gridData.length; i < len; i++){
                        var obj = [{ nodeId:gridData[i].OrderID,nodeText:gridData[i].CustomerID }];
                        grid.deleteRow(args.rows[i]);
                        tree.addNodes(obj,currLi);
                    }
                    args.cancel=true;
                }
            }
        }
});
grid.appendTo('#Grid'); 

var treeViewObj = new ej.navigations.TreeView({
        fields: { dataSource: hierarchicalData, id: 'nodeId', text: 'nodeText',  
            child: 'nodeChild'
          },  
       });
treeViewObj.appendTo('#tree');
 

