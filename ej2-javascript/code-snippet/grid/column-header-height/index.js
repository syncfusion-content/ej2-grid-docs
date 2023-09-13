var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        width: 120,
        textAlign: 'Right',
      },
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        format: 'yMd',
        textAlign: 'Right',
      },
      { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    pageSettings: { pageCount: 5 },
  });
  grid.appendTo('#Grid');
  
  document.getElementById('changeHeight').onclick=function(event)
  {
      const heightMap = { small: '20px', medium: '42px', big: '60px' };
      const headerCells = (grid).getHeaderContent().querySelectorAll('.e-headercell');
      headerCells.forEach((headerCell) => {
        (headerCell).style.height = (heightMap)[
          (event.target).id
        ];
      });
    }
  
  