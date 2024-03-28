import { Grid, Edit, Toolbar, SaveEventArgs } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let dropdownElem;
let dropdownObj;
let orderData;


let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    actionBegin: actionBegin,
    actionComplete: actionComplete,
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
                write: function (args: { element: { value: any; }; rowData: { FeedbackDetails: any; }; }) {
                    dropdownObj = new DropDownList({
                        dataSource: dropDownEnumValue,
                        fields: { text: 'FeedbackDetails', value: 'FeedbackDetails' },
                        value: orderData.FeedbackDetails, // Check if orderData is defined
                        change: function () { // Update orderData when the dropdown selection changes
                            if (dropdownObj && orderData) {
                                orderData.FeedbackDetails = dropdownObj.value as string;
                            }
                        }
                    });
                    dropdownObj.appendTo(dropdownElem as HTMLElement);
                    args.element.value = args.rowData.FeedbackDetails;
                },
            },
        },
    ],
    height: 273
});
grid.appendTo('#Grid');

export enum Feedback {
    Positive = 0,
    Negative = 1,
}

var dropDownEnumValue = Object.keys(Feedback).filter(
    (key) => !isNaN(Number(Feedback[key]))
);

function actionComplete(args: { requestType: string; rowIndex: string | number; }) {
    if (args.requestType === 'beginEdit') {
        var rowData = grid.getCurrentViewRecords()[args.rowIndex];
        dropdownObj.value = rowData.FeedbackDetails;
        dropdownObj.dataBind();
    }
}

function actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
        (args.data as EmployeeDetails)['FeedbackDetails'] = orderData['FeedbackDetails'];
    }
}

export interface EmployeeDetails {
    OrderID: number;
    CustomerID: string;
    FeedbackDetails: Feedback;
}