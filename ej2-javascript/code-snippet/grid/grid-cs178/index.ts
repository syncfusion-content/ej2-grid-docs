

import { Grid, VirtualScroll, Edit, Toolbar } from '@syncfusion/ej2-grids';
Grid.Inject(VirtualScroll, Edit, Toolbar);

let names: string[] = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation: string[] = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status: string[] = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
let data: Function = (count: number) => {
    let result: Object[] = [];
    for (let i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.round(Math.random() * names.length)] || names[0],
            Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
            Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
            Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    return result;
};

(<IWindow>window).getStatus = (status: string) => {
    let colors: Object = { 'Completed': 'green', 'Open': 'red', 'In Progress': '#FB1E77', 'Review': 'brown', 'Testing': '#1EC1FB' };
    return '<span style="color:' + colors[status] + '">' + status + '</span>';
};

let grid: Grid = new Grid({
    dataSource: data(1000),
    height: 300,
    enableVirtualization: true,
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: { pageSize: 50 },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 100, type: 'number', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'Engineer', width: 100 },
        { field: 'Designation', width: 140, editType: 'dropdownedit', validationRules: { required: true } },
        { field: 'Estimation', textAlign: 'Right', width: 110, editType: 'numericedit', validationRules: { required: true } },
        { field: 'Status', width: 140, template: '${getStatus(data.Status)}', editType: 'dropdownedit' }
    ]
});

grid.appendTo('#Grid');

interface IWindow extends Window {
    getStatus?: Function;
}



