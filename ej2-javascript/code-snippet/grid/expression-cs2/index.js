var grid = new ej.grids.Grid({
    dataSource: foodInformation,
    columns: [
        { field: 'FoodName', headerText: 'FoodName', width: 120 },
        { field: 'Protein', headerText: 'Protein', textAlign: 'Right', width: 100 },
        { field: 'Fat', headerText: 'Fat', textAlign: 'Right', width: 100 },
        { field: 'Carbohydrate', headerText: 'Carbohydrate', textAlign: 'Right', width: 130 },
        { headerText: 'Calories In Take', valueAccessor: totalCalories, textAlign: 'Right', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function totalCalories(field, data, column){
    return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
};

