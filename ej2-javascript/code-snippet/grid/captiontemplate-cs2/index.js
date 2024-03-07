ej.grids.Grid.Inject(ej.grids.Group);
ej.base.setCulture('ar');

ej.base.L10n.load({
    ar: {
        grid: {
          GroupDropArea: 'اسحب رأس العمود هنا لتجميع العمود',
          Item: 'بند',
          Items: 'العناصر',
          GroupCaption: ' هي خلية تسمية توضيحية جماعية',
        },
      },
});

var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID',textAlign: 'Right',width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID',width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');