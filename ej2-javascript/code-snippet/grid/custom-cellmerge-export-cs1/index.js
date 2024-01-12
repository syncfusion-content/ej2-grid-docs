var data =  [{OrderID: 10248,CustomerID:"VINET",City:"Reims"},{OrderID: 10248,CustomerID:"CHOPS",City:"Münster"},
{OrderID: 10250,CustomerID:"TOMSP",City:"San Cristóbal"}, {OrderID: 10251,CustomerID:"RISCU",City:"Rio de Janeiro"},
{OrderID: 10251,CustomerID:"HANAR",City:"Resende"}, {OrderID: 10251,CustomerID:"WELLI",City:"Lyon"},
{OrderID: 10255,CustomerID:"SUPRD",City:"Genève"},{OrderID: 10256,CustomerID:"HILAA",City:"Charleroi"},
{OrderID: 10257,CustomerID:"CENTC",City:"Bern"},{OrderID: 10257,CustomerID:"HANAR",City:"Rio de Janeiro"},
{OrderID: 10259,CustomerID:"TOMSP",City:"Reims"}];

ej.grids.Grid.Inject(ej.grids.RowDD, ej.grids.Toolbar, ej.grids.Export, ej.grids.ExcelExport, ej.grids.PdfExport);
var gridcells;
var ValOfOrderID  =null;
var i=1;
// global variable declaration for pdf Export
var pdfGridcell;
var ValOfOrderID_PDF = null;
var pdfCellindex =1;

var grid = new ej.grids.Grid({
  dataSource: data,
  allowExcelExport:true,
  allowPdfExport:true,
  toolbar:["ExcelExport","PdfExport"],
  toolbarClick: toolbarClick,
  dataBound: onDataBound,
  excelQueryCellInfo:excelQueryCellInfo,
  excelExportComplete: excelExportComplete,
  pdfQueryCellInfo: pdfQueryCellInfo,
  pdfExportComplete: pdfExportComplete,
  allowPaging:true,
  pageSettings: { pageSize:5 },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },  
      { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
      {field: "City", headerText:"ShipCity",width:120}
  ],
  height: 260,
})
grid.appendTo('#Grid');
function toolbarClick(args){
    if (args.item.text === 'PDF Export') {
        this.pdfExport();
    }
    if (args.item.text === 'Excel Export') {
        this.excelExport();
    }
 }

 function onDataBound(args) {
  var previousData = null;
  var stRowIndex = null;
  var endRowIndex = null;
  var rows = grid.getRows();
  var data = grid.getCurrentViewRecords();

  for (var i = 0, len = rows.length; i < len; i++) {
      if (!previousData) {
          previousData = data[i]['OrderID'];
          stRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"));
      }
      else if (previousData === data[i]['OrderID']) {
          rows[i].children[0].classList.add('e-hide');
      }
      else if (previousData && previousData !== data[i]['OrderID']) {
          if (grid.getRows().length > 0 && grid.getRows().length > stRowIndex) {
              endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
              var targetCell  =
                  [].slice.call(grid.getRows()[stRowIndex].querySelectorAll('.e-rowcell')).filter((cell) =>
                      parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(rows[i].children[0].getAttribute('aria-colindex')));
              targetCell[0].setAttribute("rowSpan", endRowIndex - stRowIndex);
              previousData = data[i]['OrderID'];
              stRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
          }
      }
      if (rows[i].children[0].classList.contains("e-hide") || i < len) {
          endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
          if (endRowIndex > 0) {
              var targetCell = [].slice.call(grid.getRows()[stRowIndex].querySelectorAll('.e-rowcell')).filter((cell) =>
                  parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(rows[i].children[0].getAttribute('aria-colindex')));
              targetCell[0].setAttribute("rowSpan", endRowIndex + 1);
          }
      }
  }
}
function excelQueryCellInfo(args) {

  if (!ValOfOrderID && args.column.field == "OrderID") {
      ValOfOrderID = args.data["OrderID"];
      gridcells = args.cell;
  }
  else if (ValOfOrderID && args.column.field == "OrderID" && ValOfOrderID == args.data["OrderID"]) {
      i++;
  } else if (ValOfOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
      gridcells.rowSpan = i;
      ValOfOrderID = args.data["OrderID"];
      gridcells = args.cell;
      i = 1;
  }
}

function excelExportComplete(args) {
  ValOfOrderID = null;
  gridcells = null;
  i=1;
}
function pdfQueryCellInfo(args) {
  if(!ValOfOrderID_PDF && args.column.field == "OrderID"){
          ValOfOrderID_PDF =  args.data["OrderID"];
          pdfGridcell = args.cell;
      }
      else if(ValOfOrderID_PDF && args.column.field == "OrderID" &&  ValOfOrderID_PDF ==args.data["OrderID"]){
        pdfCellindex++;
      } else if(ValOfOrderID_PDF !== args.data["OrderID"] && args.column.field == "OrderID") {
        pdfGridcell.rowSpan = pdfCellindex;
        ValOfOrderID_PDF = args.data["OrderID"];
        pdfGridcell= args.cell;
        pdfCellindex = 1 ;
      }
    }
     // Reset the pdf export global variable values
     function pdfExportComplete(args){
      ValOfOrderID_PDF=null;
      pdfGridcell=null;
      pdfCellindex =1;
    }