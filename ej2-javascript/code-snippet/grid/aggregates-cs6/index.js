var customAggregateFn = function(data){

    return ('result' in data ? ( 'records' in data.result ?
      return data.result.records.filter((item: Object) =>
    item['CustomerID'] === 'HANAR'
    ).length :
    return data.result.filter(function(item){
    item['CustomerID'] === 'HANAR'
    }).length)
    :
    ( 'items' in data ?
    return data.items.filter(function(item){
    item['CustomerID'] === 'HANAR'
    }).length : 
     return data.filter(function(item){
    item['CustomerID'] === 'HANAR'
     }).length)
    )
};

ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Toolbar, ej.grids.Edit, ej.grids.Group, ej.grids.Aggregate);

var grid = new Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:6},
    toolbar: ['Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowDeleting: true, mode: 'Batch' },
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
    ],
    height: 268,
    aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'CustomerID',
            footerTemplate: 'HANAR Count: ${Custom}'
        },
        {
          type:'Sum',
          field:'Freight',
          format:'C2',
          footerTemplate:'Sum : ${Sum}'
        }]
    },
    {
        columns:[{
            type:'Sum',
            field:'Freight',
            format:'C2',
            groupCaptionTemplate:'Sum : ${Sum}'
        }]
    },
    {
        columns:[{
            type:'Sum',
            field:'Freight',
            format:'C2',
            groupFooterTemplate:'Sum : ${Sum}'
        }]
    }
    ]
});
grid.appendTo('#Grid');

