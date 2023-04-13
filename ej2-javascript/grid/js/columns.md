---
layout: post
title: Columns in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Columns in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Columns in ##Platform_Name## Grid control

The column definitions are used as the [`dataSource`](../api/grid/#datasource) schema in the Grid. This plays a vital role in rendering column values in the required format. The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions. The [`field`](../api/grid/column/#field) property of the [`columns`](../api/grid/column) is necessary to map the data source values in Grid columns.
 
> 1. If the column [`field`](../api/grid/column/#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](../api/grid/column/#field) name contains “dot” operator, it is considered as complex binding.

## Auto generation

The [`columns`](../api/grid/column) are automatically generated when [`columns`](../api/grid/column) declaration is empty or undefined while initializing the grid. All the columns in the [`dataSource`](../api/grid/#datasource) are bound as grid columns.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs18" %}

> When columns are auto-generated, the column [`type`](../api/grid/column/#type) will be determined from the first record of the [`dataSource`](../api/grid/#datasource).

### Set isPrimaryKey for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](../api/grid/column/#isprimarykey) column property as true by any one of the following two ways,

If Primary key "column index" is known then refer the following code example

```ts
ej.grids.Grid.Inject(ej.grids.Edit);

let data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid = new ej.grids.Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = function() {
    var column = grid.columns[0];
    column.isPrimaryKey = 'true';
}

```

If Primary key "column fieldname" is known then refer the following code example

```ts
ej.grids.Grid.Inject(ej.grids.Edit);

let data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid = new ej.grids.Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = function() {
    var column = grid.getColumnByField('OrderID');
    column.isPrimaryKey = 'true';
}

```

### Set column options to auto generated columns

You can set column options such as [`format`](../api/grid/column/#format), [`width`](../api/grid/column/#width) to the auto generated columns by using [`dataBound`](../api/grid/#databound) event of the grid.

In the below example, [`width`](../api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and **numeric** type is set for **Freight** column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs19" %}

## Complex data binding

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](../api/grid/column/#field).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/complex-binding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/complex-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs3" %}

For OData and ODataV4 adaptors, you need to add [`expand`](../api/data/query/#expand) query to the [`query`](../api/grid/#query) property (of Grid), to eager load the complex data.

```ts
 let  data = new ej.data.DataManager({
       adaptor: new ej.data.ODataAdaptor(),
       crossDomain: true,
       url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
     });
 let query = new ej.data.Query().expand('Employee');

 let grid = new ej.grids.Grid({
    dataSource: data,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Employee.City', headerText: 'Employee City', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

## Foreign Key Column

Foreign key column can be enabled by using [`column.dataSource`](../api/grid/column/#datasource), [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs12" %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../api/grid/column/#field).

## Header Template

You can customize the header element by using the [`headerTemplate`](../api/grid/column/#headerTemplate) property. In this demo, the custom element is rendered for both EmployeeID and BirthDate column headers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/headertemplate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/headertemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/headertemplate-cs2" %}

## Header text

By default, column header title is displayed from column [`field`](../api/grid/column/#field) value. To override the default header title, you have to define the [`headerText`](../api/grid/column/#headertext) value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs116/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs116/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs116" %}

> * If both the [`field`](../api/grid/column/#field) and [`headerText`](../api/grid/column/#headertext)
are not defined in the column, the column renders with “empty” header text.

## Format

To format cell values based on specific culture, use the [`columns.format`](../api/grid/column/#format) property. The grid uses[Internalization](../common/internationalization/) library to format [`number`](../common/internationalization/#number-formatting) and [`date`](../common/internationalization/#date-formatting)
values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs117/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs117/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs117" %}

> By default, the [`number`](../common/internationalization/#number-formatting) and [`date`](../common/internationalization/#date-formatting) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained [`here`](../common/internationalization/)

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../common/internationalization/#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](../api/grid/column/#format) property as string   (Example: **yMd**). Please refer to the link to know more about [`Date formatting`](../common/internationalization/#date-formatting).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/pagerdropdown-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/pagerdropdown-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pagerdropdown-cs4" %}

## Visibility

You can hide any particular column in Grid before rendering by defining [`visible`](../api/grid/column/#visible) property as false. In the below sample **ShipCity** column is defined as visible false.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs118/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs118/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs118" %}

## AutoFit specific columns

The [`autoFitColumns`](../api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](../api/grid/#autofitcolumns) method in [`dataBound`](../api/grid/#dataBound) event.

To use the [`autoFitColumns`](../api/grid/#autofitcolumns) method, inject the **Resize** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/autofit-columns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs2" %}

> You can autofit all the columns by invoking the [`autoFitColumns`](../api/grid/#autofitcolumns) method without column names.

## Reorder

Reordering can be done by drag and drop of a particular column header from one index to another index within the grid. To enable reordering, set the [`allowReordering`](../api/grid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](../api/grid/reorder) module in the grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs20" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](../api/grid/column/#allowreordering) to **false**.

### Reorder Single Column

Grid have option to reorder Columns either by Interaction or by using the [`reorderColumns`](../api/grid/reorder/#reordercolumns)method. In the below sample, **ShipCity** column is reordered to last column position by using the method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/reorder-single-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/reorder-single-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/reorder-single-column-cs2" %}

### Reorder Multiple Columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using [`reorderColumns`](../api/grid/reorder/#reordercolumns) method.

In the below sample, **Ship City** and **Ship Region** column is reordered to last column position.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/reorder-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/reorder-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/reorder-column-cs2" %}

### Reorder Events

During the reorder action, the grid component triggers the below three events.

1. The [`columnDragStart`](../api/grid/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](../api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](../api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs21" %}

## Lock Columns

You can lock columns by using [`column.lockColumn`](../api/grid/column/#lockColumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, **Ship City** column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/lock-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/lock-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/lock-column-cs2" %}

## Column resizing

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To enable column resize, set the [`allowResizing`](../api/grid/#allowresizing) property to true.

To use the column resize, inject **Resize** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs22" %}

> * You can disable resizing for a particular column by setting the [`columns.allowResizing`](../api/grid/column/#allowresizing) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.

### Column Resizing Externally

To resize a column, set width to that particular column and then refresh the grid header by using the [`refreshHeader()`](../api/grid/#refreshheader) method. Please refer the below code

```ts

var grid = document.getElementById('Grid').ej2_instances[0]; //Grid Instance

var columns = grid.columns;

columns[0].width = 150;

grid.refreshHeader();

```

### Min and max width

Column resize can be restricted between minimum and maximum width by defining the [`columns->minWidth`](../api/grid/column/#minwidth) and [`columns->maxWidth`](../api/grid/column/#maxwidth).

In the following sample, minimum and maximum width are defined for **OrderID**, **Ship Name**, and **Ship Country** columns.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs23" %}

### Resize Stacked Column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for any particular stacked column by setting [`allowResizing`](../api/grid/#allowresizing) as **false** to its columns.

In this example, we have disabled resize for **Ship City** column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs24" %}

### Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed. You can autoFit a column by using the Column menu of the grid.

The following screenshot represents the column resizing in touch device.

![Touch interaction image](images/column-resizing.jpg)

### Resizing Events

During the resizing action, the grid component triggers the below three events.

1. The [`resizeStart`](../api/grid/#resizestart) event triggers when column resize starts.
2. The [`resizing`](../api/grid/#resizing) event triggers when column header element is dragged (moved) continuously..
3. The [`resizeStop`](../api/grid/#resizestop) event triggers when column resize ends.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs25" %}

## Column template

The column [`template`](../api/grid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-cs2" %}
> Grid actions such as editing, grouping, filtering and sorting etc. will depend upon the column [`field`](../api/grid/column/#field). If the [`field`](../api/grid/column/#field) is not specified in the template column, the grid actions cannot be performed.

### Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Discontinued** field value.

```
  <script id="template" type="text/x-template">
            <div class="template_checkbox">
                ${if(Discontinued)}
                <input type="checkbox" checked> ${else}
                <input type="checkbox"> ${/if}
            </div>
        </script>
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/condition-inside-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/condition-inside-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/condition-inside-template-cs2" %}

## Column type

Column type can be specified using the [`columns.type`](../api/grid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](../api/grid/column/#format)  is defined for a column, the column uses [`type`](../api/grid/column/#type) to select the appropriate format option ([number](../common/internationalization/#number-formatting) or [date](../common/internationalization/#manipulating-datetime)).

Grid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](../api/grid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](../api/grid/#datasource).
> Incase if the first record of the [`dataSource`](../api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](../api/grid/column/#type) for that column.

## Column chooser

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](../api/grid/#showcolumnchooser) as true.

To use the column chooser, inject the **ColumnChooser** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/columnchooser-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/columnchooser-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/columnchooser-cs2" %}

> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](../api/grid/column/#showincolumnchooser) as false.

### Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking the [`openColumnChooser`](../api/grid/columnChooser) method with **X** and **Y** axis positions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/columnchooser-method-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/columnchooser-method-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/columnchooser-method-cs2" %}

## Column menu

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](../api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenu** module in the grid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [`filterSettings.type`](../api/grid/filterSettings/#type) |

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs26" %}

> * You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](../api/grid/column/#showcolumnmenu) as false.
> * You can customize the default items by defining the [`columnMenuItems`](../api/grid/#columnmenuitems) with required items.

### Column menu events

During the resizing action, the grid component triggers the below two events.

1. The [`columnMenuOpen`](../api/grid/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](../api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs27/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs27" %}

### Custom Column Menu Item

Custom column menu items can be added by defining the [`columnMenuItems`](../api/grid/#columnmenuitems) as collection of the [`columnMenuItemModel`](../api/grid/columnMenuItemModel). Actions for this customized items can be defined in the [`columnMenuClick`](../api/grid/#columnmenuclick) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs28" %}

### Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](../api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](../api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs29" %}

## Column spanning

The grid has option to span the adjacent cells. You need to define the [`colSpan`](../api/grid/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](../api/grid/queryCellInfoEventArgs) event.

In the following demo, employee **Davolio** is doing analysis from 9.00 A.M. to 10.00 A.M. so that the cells have been spanned.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-spanning-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-spanning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-spanning-cs2" %}

## Responsive columns

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](../api/grid/column/#hideatmedia).
The [`hideAtMedia`](../api/grid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for **OrderID** column, [`hideAtMedia`](../api/grid/column/#hideatmedia) property value is set as **(min-width: 700px)** so that **OrderID** column will gets hidden when the browser screen width is lessthan 700px.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hide-media-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hide-media-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hide-media-cs2" %}

## Controlling Grid actions

You can enable or disable grid action for a particular column by setting the [`allowFiltering`](../api/grid/#allowfiltering),
[`allowGrouping`](../api/grid/#allowgrouping), [`allowSorting`](../api/grid/#allowsorting), [`allowReordering`](../api/grid/#allowreordering), and [`allowEditing`](../api/grid/#editsettings) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grouping-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grouping-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grouping-cs2" %}

## Show/hide columns by external button

You can show or hide grid columns dynamically using external buttons by invoking the [`showColumns`](../api/grid/#showcolumns) or [`hideColumns`](../api/grid/#hidecolumns) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/show-hide-columns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/show-hide-columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/show-hide-columns-cs2" %}

## ValueAccessor

The [`valueAccessor`](../api/grid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](../api/grid/column/#valueaccessor).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/value-accessor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/value-accessor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/value-accessor-cs2" %}

### Display array type columns

You can bind an array of objects in a column by using the [`valueAccessor`](../api/grid/column/#valueaccessor) property. In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the [`valueAccessor`](../api/grid/column/#valueaccessor).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/array-of-string-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/array-of-string-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/array-of-string-cs2" %}

### Expression column

You can achieve the expression column by using the [`valueAccessor`](../api/grid/column/#valueaccessor) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/expression-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/expression-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/expression-cs2" %}

## Render boolean values as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../api/grid/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs119/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs119/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs119" %}

## See Also

* [How to Change Column Header Text Dynamically](./how-to/change-header-text-dynamically)
* [Customize Column Styles](./how-to/customize-column-styles)
* [Custom Tooltip for Columns](how-to/display-custom-tool-tip-for-columns-in-grid)
* [How to Render Other Component in a Column](how-to/render-other-components-in-column)
* [How to change the Orientation of Header Text](./how-to/change-orientation-of-header-text)
* [Group Column by Format](./grouping#group-by-format)
* [How to Use Edit Template in Foreign Key Column](./how-to/use-edit-template-in-foreign-key-column)
* [How to Create and use custom Filter UI in Foreign Key Column](./how-to/customize-filter-ui-in-foreign-key)
* [How to Use Filter Bar Template in Foreign Key Column](./how-to/use-filter-bar-template-in-foreign-key-column)
* [How to Perform aggregation in Foreign Key Column](./how-to/perform-aggregation-in-foreign-key-column)
* [How to set complex column as Foreignkey column](./how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](./how-to/list-of-array-of-objects)