import { Grid } from '@syncfusion/ej2-grids';
import { foodInformation } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: foodInformation,
    columns: [
        { field: 'FoodName', headerText: 'Food Name', width: 150 },
        { field: 'Protein', headerText: 'Protein', textAlign: 'Right', width: 120 },
        { field: 'Fat', headerText: 'Fat', textAlign: 'Right', width: 80 },
        { field: 'Carbohydrate', headerText: 'Carbohydrate', textAlign: 'Right', width: 120 },
        { headerText: 'Calories Intake', valueAccessor: totalCalories, textAlign: 'Right', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function totalCalories(field: string, data: { Protein: number, Fat: number, Carbohydrate: number }, column: Object): number {
    return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
};