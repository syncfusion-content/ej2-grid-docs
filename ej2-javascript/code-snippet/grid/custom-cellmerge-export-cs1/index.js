
ej.grids.Grid.Inject(ej.grids.RowDD, ej.grids.Toolbar, ej.grids.Export, ej.grids.ExcelExport, ej.grids.PdfExport);
// global variable declaration for excel export
var gridcells: ExcelCell ; 
var ValOfOrderID:Number =null;
var i=1;
// global variable declaration for pdf Export 
var pdfGridcell: PdfGridCell;
var ValOfOrderID_PDF :Number = null;
var pdfCellindex:Number =1;
var grid = new ej.grids.Grid({
    dataSource: data,    
    dataBound: onDataBound,
    toolbarClick: toolbarClick,
    excelQueryCellInfo:excelQueryCellInfo,
    excelExportComplete: excelExportComplete,
    pdfQueryCellInfo: pdfQueryCellInfo,
    pdfExportComplete: pdfExportComplete,
    toolbar:["ExcelExport","PdfExport"],
    allowExcelExport:true,
    allowPdfExport:true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },       
        { field: 'City', headerText: 'Ship City', width: 100 },
    ],
    height: 315,
    
});
grid.appendTo('#Grid');

  function toolbarClick(args){
        if (args.item.text === 'PDF Export') {
            this.pdfExport();
        }
        if (args.item.text === 'Excel Export') {
            this.excelExport();
        }
     }
function onDataBound(args: any) {    
    var previousData: string = null;
    var stRowIndex: number = null;
    var endRowIndex: number = null;
    var grid = this;
    var rows = this.getRows();
    var data = this.getCurrentViewRecords();

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
                var targetCell: Element[] =
                    [].slice.call(grid.getRows()[stRowIndex].querySelectorAll('.e-rowcell')).filter((cell: Element) =>
                        parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(rows[i].children[0].getAttribute('aria-colindex')));
                (targetCell[0] as any).setAttribute("rowSpan", endRowIndex - stRowIndex);
                previousData = data[i]['OrderID'];
                stRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
            }
        }
        if (rows[i].children[0].classList.contains("e-hide") || i < len) {
            endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
            if (endRowIndex > 0) {
                var targetCell: Element[] = [].slice.call(grid.getRows()[stRowIndex].querySelectorAll('.e-rowcell')).filter((cell: Element) =>
                    parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(rows[i].children[0].getAttribute('aria-colindex')));
                (targetCell[0] as any).setAttribute("rowSpan", endRowIndex + 1);
            }
        }
    }
}
function excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs) {

    if (!ValOfOrderID && args.column.field == "OrderID") {
        ValOfOrderID = args.data["OrderID"];
        gridcells = (args.cell as ExcelCell);
    }
    else if (ValOfOrderID && args.column.field == "OrderID" && ValOfOrderID == args.data["OrderID"]) {
        i++;
    } else if (ValOfOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
        (gridcells as ExcelCell).rowSpan = i;
        ValOfOrderID = args.data["OrderID"];
        gridcells = (args.cell as ExcelCell);
        i = 1;
    }
}
// Reset the excel export global variable values
function excelExportComplete(args: ExcelExportCompleteArgs){
    ValOfOrderID = null;
    gridcells = null;
    i=1;
  }
  function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs){      
    if(!ValOfOrderID_PDF && args.column.field == "OrderID"){
            ValOfOrderID_PDF =  args.data["OrderID"];
            pdfGridcell = (args.cell as PdfGridCell);
        }
        else if(ValOfOrderID_PDF && args.column.field == "OrderID" &&  ValOfOrderID_PDF ==args.data["OrderID"]){
          (pdfCellindex as any)++;          
        } else if(ValOfOrderID_PDF !== args.data["OrderID"] && args.column.field == "OrderID") {
          (pdfGridcell as PdfGridCell).rowSpan = pdfCellindex as any;
          ValOfOrderID_PDF = args.data["OrderID"];
          pdfGridcell=(args.cell as PdfGridCell);
          pdfCellindex = 1 ;
        }
      }
       // Reset the pdf export global variable values
       function pdfExportComplete(args: PdfExportCompleteArgs){
        ValOfOrderID_PDF=null;
        pdfGridcell=null;
        pdfCellindex =1;
      }