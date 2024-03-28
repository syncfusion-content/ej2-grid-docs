ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var dropdownElem;
var dropdownObj;
var orderData;

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Employee Name', textAlign: 'Left', width: 100 },
        {
            field: 'FeedbackDetails', headerText: 'Employee Feedback', textAlign: 'Left', width: 120,
            edit: {
                create: function () {
                    dropdownElem = document.createElement('input');
                    return dropdownElem;
                },
                read: function () {
                    return dropdownObj.text;
                },
                write: function (args) {
                    dropdownObj = new ej.dropdowns.DropDownList({
                        dataSource: dropDownEnumValue,
                        fields: { text: 'FeedbackDetails', value: 'FeedbackDetails' },
                        value: orderData.FeedbackDetails, // Check if orderData is defined
                        change: function () { // Update orderData when the dropdown selection changes
                            if (dropdownObj && orderData) {
                                orderData.FeedbackDetails = dropdownObj.value;
                            }
                        }
                    });
                    dropdownObj.appendTo(dropdownElem);
                    args.element.value = args.rowData.FeedbackDetails;
                },
            },
        },
    ],
    actionComplete: actionComplete,
    height: 273
});
grid.appendTo('#Grid');

var Feedback = { Positive: 0, Negative: 1 };

var dropDownEnumValue = Object.keys(Feedback).filter(
    (key) => !isNaN(Number(Feedback[key]))
);

function actionComplete(args) {
    if (args.requestType === 'beginEdit') {
        var rowData = grid.getCurrentViewRecords()[args.rowIndex];
        dropdownObj.value = rowData.FeedbackDetails;
        dropdownObj.dataBind();
    }
}

function actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
        (args.data)['FeedbackDetails'] = orderData['FeedbackDetails'];
    }
}