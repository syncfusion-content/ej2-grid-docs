---
layout: post
title: Row in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Row in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row in ##Platform_Name## Grid control

Each row typically represents a single record or item from a data source. Rows in a grid are used to present data in a tabular format. Each row displays a set of values representing the fields of an individual data record. Rows allow users to interact with the data in the grid. Users can select rows, edit cell values, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles 

Customizing the styles of rows in a Syncfusion Grid allows you to modify the appearance of rows to meet your design requirements. This feature is useful when you want to highlight certain rows or change the font style, background color, and other properties of the row to enhance the visual appeal of the grid. To customize the row styles in the grid, you can use CSS, properties, methods, or event support provided by the Syncfusion Angular Grid component.

### Using event

You can customize the appearance of the rows by using the [rowDataBound](../../api/grid/#rowdatabound) event. This event triggers for every row when it is bound to the data source. In the event handler, you can get the [RowDataBoundEventArgs](../../api/grid/rowDataBoundEventArgs) object, which contains details of the row. You can use this object to modify the row's appearance, add custom elements, or perform any other customization.

Here's an example of how you can use the `rowDataBound` event to customize the styles of rows based on the value of the **Freight** column. This example involves checking the value of the Freight column for each row and adding a CSS class to the row based on the value. The CSS classes **below-30**, **below-80**, and **above-80** can then be defined in your stylesheet to apply the desired styles to the rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-row-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-row-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-row-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-row-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-row-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-row-cs3" %}
{% endif %}

### Using CSS

You can apply styles to the rows using CSS selectors. The Grid provides a class name for each row element, which you can use to apply styles to that specific row. 

**Customize alternate rows**

You can customize the appearance of the alternate rows using CSS. This can be useful for improving the readability of the data and making it easier to distinguish between rows. By default, Syncfusion Grid provides the CSS class **.e-altrow** to style the alternate rows. You can customize this default style by overriding the **.e-altrow** class with your custom CSS styles. 

To change the background color of the alternate rows, you can add the following CSS code to your application's stylesheet:

```css
.e-grid .e-altrow {
    background-color: #aaf1eb;
}
```

Here's an example of how to use the **.e-altrow** class to style alternate rows:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs1" %}
{% endif %}

**Customize selected row**

You can customize the appearance of the selected row using CSS. This is useful when you want to highlight the currently selected row for improve the visual appeal of the Grid. By default, the Grid provides the CSS class **.e-selectionbackground** to style the selected row. You can customize this default style by overriding the **.e-selectionbackground** class with your own custom CSS styles.

To change the background color of the selected row, you can add the following CSS code to your application:

```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of how to use the **.e-selectionbackground** class to style the selected row:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs2" %}
{% endif %}

### Using method 

The Grid provides below methods to customize the appearance of the grid rows :

1. [getRowByIndex](../../api/grid/#getrowbyindex): This method returns the HTML element of a row at the specified index. You can use this method to apply custom styles to a specific row.
2. [getRowIndexByPrimaryKey](../../api/grid/#getrowindexbyprimarykey): This method returns the index of the row with the specified primary key. You can use this method to get the index of a specific row and then apply custom styles to it.
3. [getRows](../../api/grid/#getrows): This method returns an array of all the row elements in the Grid. You can use this method to apply custom styles to all rows or to a specific set of rows based on some condition.
4. [getRowInfo](../../api/grid/#getrowinfo): This method returns the data object and index of the row corresponding to the specified row element. You can use this method to apply custom styles based on the data in a row.
5. [getSelectedRowIndexes](../../api/grid/#getselectedrowindexes): This method returns an array of the indexes of the selected rows in the Grid. You can use this method to apply custom styles to the selected rows.
6. [getSelectedRows](../../api/grid/#getselectedrows):This method returns an array of the HTML elements representing the selected rows in the grid. You can use this method to directly loop through the selected rows and customize their styles.

The following example demonstrates how to use [getRowByIndex](../../api/grid/#getcolumnheaderbyindex) methods to customize the appearance of the row inside the [dataBound](../../api/grid/#databound) event of the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-method-cs1" %}
{% endif %}

## Row height

The Syncfusion Grid allows you to customize the height of rows based on your needs. This feature can be useful when you need to display more content in a row or when you want to reduce the height of rows to fit its content. You can achieve this by using the [rowHeight](../../api/grid/#rowheight) property of the Grid component. This property allows you to change the height of the entire grid row to your desired value.

In the below example, we will demonstrate how to dynamically change the height of the rows using the `rowHeight` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-height-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-height-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-height-cs1" %}
{% endif %}

>*	The `rowHeight` property can only be used to set the height of the entire grid row. It cannot be used to set the height of individual cells within a row.
>*  The `rowHeight` property applies the height to all rows in the grid, including the header and footer rows.
>*	You can also set the height for a specific row using the `rowHeight` property of the corresponding row object in the `rowDataBound` event.

### Customize row height for particular row 

Customizing the row height for a particular row can be useful when you want to display more content in a particular row, reduce the height of a row to fit its content, or make a specific row stand out from the other rows in the grid. This can be achieved by using the [rowHeight](../../api/grid/#rowheight)property of the Grid component along with the [rowDataBound](../../api/grid/#rowdatabound) event.

The `rowHeight` property of the Grid component allows you to set the height of all rows in the grid to a specific value. However, if you want to customize the row height for a specific row based on the row data, you can use the `rowDataBound` event. This event is triggered every time a request is made to access row information, element, or data, and before the row element is appended to the Grid element.

In the below example, the row height for the row with OrderID as '10249' is set as '90px' using the `rowDataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-height-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-height-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-height-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-height-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-height-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-height-cs8" %}
{% endif %}

### How to get the row information when hovering over the cell

You can retrieve row information when hovering over a specific cell. This can be useful if you want to display additional details or perform some action based on the data in the row. This can be achieved by using the [rowDataBound](../../api/grid/#rowdatabound) event and the [getRowInfo](../../api/grid#getrowinfo) method of the Grid.

* The `rowDataBound` event is triggered every time a request is made to access row information, element, or data, before the row element is appended to the Grid element.
* The `getRowInfo` method is used to retrieve the row information when hovering over a specific cell. This method takes a single parameter, which is the target element that is being hovered over.

Here's an example that demonstrates how to use the `rowDataBound` event and `getRowInfo` method to retrieve the row information when hovering over a cell in the Syncfusion Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs154/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs154/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs154" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs154/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs154/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs154" %}
{% endif %}

>The `getRowInfo` method can only be used in the `rowDataBound` event. Attempting to use it elsewhere will result in an error.

## Adding a new row programmatically

The Syncfusion Grid provides a way to add a new row to the grid programmatically. This feature is useful when you want to add a new record to the grid without having the manually enter data in the grid.This can be done using the [addRecord](../../api/grid/#addrecord) method of the Grid.

The addRecord method takes two parameters:

* The **data** object representing the new row to be added
* The **index** at which the new row should be inserted. If no index is specified, the new row will be added at the end of the Grid.

Here's an example of how to add a new row using the `addRecord` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/add-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/add-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/add-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/add-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/add-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/add-row-cs1" %}
{% endif %}

>* When working with remote data, it is impossible to add a new row between the existing rows.
>* If you want to add a new record to the beginning of the data source, you can pass **0** as the second parameter to the `addRecord `method.
>* If you do not specify an index, the new row will be added at the end of the grid.

## Show or hide a row using an external actions

In a Syncfusion grid, you can show or hide a particular row based on some external action, such as a checkbox click.This can be useful in scenarios where you want to hide certain rows from the grid temporarily, without removing them from the underlying data source. This can be achieved by using  the [getRowByIndex](../../api/grid/#getrowbyindex) and `getRowsObject` methods of the grid along with the [change](../../api/check-box/#change) event of the checkbox

The `getRowsObject` method returns an array of row objects that represents all the rows in the grid. You can use this method to iterate through all the rows and access their data and index.

The [getRowByIndex](../../api/grid/#getrowbyindex) method returns the HTML element of a row at the specified index. You can use this method to get a specific row and apply changes to it.

In the following example, the **onCheckBoxChange** method is used to check whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the grid using the `getRowsObject` method. For each row, it checks whether the value in the **CustomerID** column is equal to "VINET". If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called hiddenRows.

If the checkbox is unchecked, the method iterates through the hiddenRows array and shows each row by setting its display style to an empty string. The hiddenRows array is also cleared.

## How to get the row data and element

Grid provides several methods to retrieve row data and elements. This feature is useful when you need to access specific rows, perform custom operations, or manipulate the data displayed in the grid.

1. [getRowByIndex](../../api/grid/#getrowbyindex): This method returns the HTML element of a row at the specified index. It can be used to retrieve the element of a specific row in the grid.

    ```
    const rowElement = grid.getRowByIndex(rowIndex);
    ```

2. [getRowByPrimaryKey](../../api/grid/#getrowindexbyprimarykey):The method allows you to retrieve the row index based on a specific primary key value or row data.

    ```
    const rowIndex = grid.getRowByPrimaryKey(primaryKey);
    ```

3. [getRowInfo](../../api/grid/#getrowinfo):This method allows you to retrieve row information based on a cell target element.

    ```
    const rowInformation = grid.getRowInfo(targetElement);
    ```

4. [getRows](../../api/grid/#getrows): This method returns an array of all the row elements in the Grid. If you need to retrieve row data and elements, you can combine the `getRows` method with the `getRowInfo` method.

    ```
     const rowElements = grid.getRows();
    ```

5. [getSelectedRowIndexes](../../api/grid/#getselectedrowindexes):This method allows you to retrieve the collection of indexes of the selected rows. However, it does not directly provide the row elements and associated data. To access the row elements and data of the selected rows, you can combine the `getSelectedRowIndexes` method with `getRowByIndex` and `getRowInfo` method.

    ```
    const selectedIndexes = grid.getSelectedRowIndexes();
    ```
6. [getSelectedRows](../../api/grid/#getselectedrows):This method returns an array of HTML elements representing the selected rows in the grid.By iterating over this array, you can access each row element and data using the `getRowInfo` method. This way, you can access both the row elements and their associated data for the selected rows.

    ```
    const selectedRowElements = grid.getSelectedRows();
    ```

### See Also

* [How to get Data table row value on onclick event using JavaScript?](https://www.syncfusion.com/kb/11797/how-to-get-data-table-row-value-on-onclick-event-using-javascript)
* [How to maintain selected rows after adding new record](https://www.syncfusion.com/kb/11691/how-to-maintain-selected-rows-after-adding-new-record)
* [How to select the specific record in the grid using its primary key value](https://www.syncfusion.com/kb/11399/how-to-select-the-specific-record-in-the-grid-using-its-primary-key-value)
* [How to achieve drag and drop the rows in Grid with custom data binding](https://www.syncfusion.com/kb/11325/how-to-achieve-drag-and-drop-the-rows-in-grid-with-custom-data-binding)
* [How to get selected records on custom toolbar click](https://www.syncfusion.com/kb/11296/how-to-get-selected-records-on-custom-toolbar-click)
