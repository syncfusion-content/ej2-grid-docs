var clickHandler = function(args){
    var target = (args.originalEvent.target).closest('button'); // find clicked button
    if (target.id === 'collapse') {
      // collapse all expanded grouped row
        grid.groupModule.collapseAll();
    }
    if (target.id === 'expand') {
      // expand all collapsed grouped row
        grid.groupModule.expandAll();
    }
  };
  
  var toolbar = new ej.navigations.Toolbar({ 
    items: [
        { id:"collapse", text:"Collapse All", prefixIcon:"e-chevron-up icon" },
        { id:"expand", text:"Expand All", prefixIcon:"e-chevron-down icon" },
        ],
    clicked: clickHandler
  });
  toolbar.appendTo('#toolbar-template');
  
  var grid = new ej.grids.Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
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