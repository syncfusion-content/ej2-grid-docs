var data = [
            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: "1996-07-02T00:00:00.000Z" },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: "1996-07-19T00:00:00.000Z" },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: "1996-07-22T00:00:00.000Z" }];

var grid = new ej.grids.Grid ({
    dataSource: data,
    dataBound: dataBound
});
grid.appendTo('#Grid');

function dataBound(args) {
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[0].width = 120;
            if(this.columns[i].field === "OrderDate"){
                this.columns[i].type="date";
            }
            if (this.columns[i].type === "date") {
                this.columns[i].format = { type: "date", format: "dd/MM/yyyy" };
            }
            this.columns[2].format = "P2";
        }
        this.refreshColumns();
    }

