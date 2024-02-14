---
layout: post
title: Row selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Row selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in ##Platform_Name## Grid control

Row selection in the Grid control allows you to interactively select specific rows or ranges of rows within the grid. This selection can be done effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when you want to highlight, manipulate, or perform actions on specific row within the Grid.

> To enable row selection, you should set the [selectionSettings->mode](../../api/grid/selectionSettings/#mode) property to either **Row** or **Both**. This property determines the selection mode of the grid.

## Single row selection 

Single row selection allows you to select a single row at a time within the Grid. This feature is useful when you want to focus on specific rows or perform actions on the data within a particular row.

To enable single row selection, set the [selectionSettings->mode](../../api/grid/selectionSettings/#mode) property to **Row** and the [selectionSettings->type](../../api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a only one row at a time within the grid.

Here's an example of how to enable single row selection using properties:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs182/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs182/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs182" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs182/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs182/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs182" %}
{% endif %}

## Multiple row selection 

Multiple row selection allows you to select multiple rows within the Grid. This feature is valuable when you need to perform actions on several rows simultaneously or focus on specific data areas.

To enable multiple row selection, set the [selectionSettings->mode](../../api/grid/selectionSettings/#mode) property to **Row** and the [selectionSettings->type](../../api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select a multiple rows at a time within the grid.

Here's an example of how to enable multiple rows selection using properties:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/selected-index-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/selected-index-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs3" %}
{% endif %}

## Select row at initial rendering

You have the ability to select a specific row during the initial rendering of the Grid control. This feature is particularly useful when you want to highlight or pre-select a specific row in the grid. To achieve this, you can utilize the [selectedRowIndex](../../api/grid/#selectedrowindex) property provided by the Grid control.

In the following example, it demonstrates how to select a row at initial rendering:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs162/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs162/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs162" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs162/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs162/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs162" %}
{% endif %}

## Select rows in any page based on index value 

The Grid allows you to select rows in any page based on their index value. This feature is useful when you want to perform specific actions on rows, such as highlighting, applying styles, or executing operations, regardless of their location across multiple pages within the grid.

To achieve this, you can utilize the [selectRow](../../api/grid/#selectrow) method and the [goToPage](../../api/grid/#gotopage) method of the Grid control. By handling the [change](../../api/drop-down-list#change) event of `DropDownList` control, you can implement the logic to navigate to the desired page and select the row based on the index value. 

Additionally, by handling the [actionComplete](../../api/grid/#actioncomplete) event of the Grid, you can maintain the selection of the desired row after completing the paging action.

The following example demonstrates how to select rows in any page based on index value using `actionComplete` and `change` event:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs184/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs184/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs184" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs184/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs184/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs184" %}
{% endif %}

## Multiple row selection by single click on row 

The Grid control allows you to perform multiple row selection by simply clicking on rows one by one without pressing CTRL or SHIFT keys. This means that when you click on a row, it will be selected, and clicking on another row will add it to the selection without deselecting the previously selected rows. To deselect a previously selected row, you can click on the row again, and it will be unselected.

To enable the simple multiple row selection, you need to set the [selectionSettings->enableSimpleMultiRowSelection](../../api/grid/selectionSettings/#enablesimplemultirowselection) property to **true**. 

The following example demonstrates how to enable multiple row selection with a single click on the Grid row using `enableSimpleMultiRowSelection` property:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs185/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs185/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs185" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs185/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs185/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs185" %}
{% endif %}

## Select rows externally 

You can perform single row selection, multiple row selection, and range of row selection externally in a Grid using built-in methods. This feature allows you to interact with specific rows within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single row selection

Single row selection allows you to select a single row at a time within the Grid. This feature is useful when you want to focus on specific rows or perform actions on the data within a particular row.

To achieve single row selection, you can use the [selectRow](../../api/grid/#selectrow) method. This method allows you to programmatically select a specific row within the Grid by specifying its index.

The following example demonstrates how to select a single row within the Grid by obtaining the selected row index through a textbox control and passing these row index as argument to the `selectRow` method. When the button event is triggered by clicking the **Select Row** button, a single row is selected within the Grid:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs186/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs186/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs186" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs186/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs186/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs186" %}
{% endif %}

### Multiple rows selection

The ##Platform_Name## Grid allows you to select multiple rows within the grid simultaneously. This feature is valuable when you need to perform actions or operations on several rows at once or focus on specific areas of your data.

To achieve multiple row selection, you can use the [selectRows](../../api/grid/selection/#selectrows) method. This method allows you to select a collection of rows by specifying their indexes, giving you the ability to interact with multiple rows together.

The following example, demonstrates how to select multiple rows in the Grid by calling the `selectRows` method within the button click event and passing an array of row indexes as arguments.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs187/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs187/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs187" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs187/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs187/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs187" %}
{% endif %}

### Range of rows selection 

Range of row selection in the Grid enables you to select a continuous range of rows within the grid. This feature is particularly useful when you want to perform actions on multiple rows simultaneously or focus on a specific range of data.

To achieve range of row selection, you can use the [selectRowsByRange](../../api/grid/selection/#selectcolumnsbyrange) method. This method selects a range of rows from start and end row indexes.
 
The following example, demonstrates how to select a range of rows within the Grid by obtaining the selected rows start index and end index through textbox controls. Then, pass these start index and end index as arguments to the `selectRowsByRange` method. When you trigger the button event by clicking the **Select Rows** button, a range of rows is selected within the Grid.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs188/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs188/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs188" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs188/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs188/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs188" %}
{% endif %}

## Select grid rows based on certain condition

You can programmatically select specific rows in the ##Platform_Name## Grid control based on a certain condition. This feature is particularly useful when you need to dynamically highlight or manipulate specific rows in the grid based on custom conditions. This functionality can be achieved using the [selectRows](../../api/grid/#selectrows) method in the [dataBound](../../api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when **EmployeeID** column value greater than **3**.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs189/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs189/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs189" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs189/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs189/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs189" %}
{% endif %}

## How to get selected row indexes 

You can retrieve the indexes of the currently selected rows in the Grid control. This feature is particularly useful when you need to perform actions or operations specifically on the selected rows. 

To achieve this, you can leverage the [getSelectedRowIndexes](../../api/grid/#getselectedrowindexes) method, which returns an array of numbers representing the indexes of the selected rows.

The following example demonstrates how to get selected row indexes using  `getSelectedRowIndexes` method: 

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/selected-index-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/selected-index-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs2" %}
{% endif %}

## How to get selected records on various pages 

The Grid control allows you to retrieve the selected records even when navigating to different pages. This feature is useful when working with large data sets and allows you to perform actions on the selected records across multiple pages. 

To persist the selection across pages, you need to enable the [persistSelection](../../api/grid/selectionSettings/#persistselection) property. By default, this property is set to **false**. To enable it, set the value to **true** in the `selectionSettings` property of the Grid control.

To retrieve the selected records from different pages, you can use the  [getSelectedRecords](../../documentation/api-grid.html#getSelectedRecords) method. This method returns an array of the selected records.

The following example demonstrates how to retrieve selected records from various pages using the `getSelectedRecords` method and display **OrderID** in a dialog when a button is clicked:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs163/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs163/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs163" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/ggrid-cs163/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs163/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs163" %}
{% endif %}

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns](../../api/grid/#columns) property.

## How to get selected records  

The get selected records allows you to retrieve the data of the selected rows from the Grid control. This can be particularly useful when you need to perform actions on the selected data or display specific information based on the selected rows.

To retrieve the selected records, you can use the [getSelectedRecords](../../api/grid/#getselectedrecords) method. This method allows you to obtain an array of objects representing the selected records.

Here's an example that displays the selected row count using the `getSelectedRecords` method:

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/selected-records-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-records-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/selected-records-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/selected-records-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-records-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/selected-records-cs1" %}
{% endif %}

## Clear row selection programmatically 

Clearing row selection programmatically in the Grid control is a useful feature when you want to remove any existing row selections. To achieve this, you can use the [clearRowSelection](../../api/grid/selection/#clearrowselection) method.

>The `clearRowSelection` method is applicable when the selection [type](../../api/grid/selectionSettings/#type) is set to **Multiple** or **Single**.

The following example demonstrates how to clear row selection by calling the [clearRowSelection](../../api-grid.html#clearSelection) method in the button click event.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/clear-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/clear-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/clear-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/clear-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/clear-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/clear-selection-cs1" %}
{% endif %}

## Row selection events 

The Grid provides several events related to row selection that allow you to respond to and customize the behavior of row selection. These events give you control over various aspects of row selection. Here are the available row selection events:

[rowSelecting](../../api/grid#rowselecting): This event is triggered before any row selection occurs. It provides an opportunity to implement custom logic or validation before a row is selected, allowing you to control the selection process.

[rowSelected](../../api/grid/#rowselected): This event is triggered after a row is successfully selected. You can use this event to perform actions or updates when a row is selected.

[rowDeselecting](../../api/grid/#rowdeselecting): This event is triggered just before a selected row is deselected. It allows you to perform custom logic or validation to decide whether the row should be deselected or not.

[rowDeselected](../../api/grid/#rowdeselected): This event is triggered when a particular selected row is deselected. You can use this event to perform actions or validations when a row is no longer selected.

In the following example, row selection is canceled when the value of **CustomerID** is equal to **VINET** within the `rowSelecting` event. The background color changes to green when the value of **Freight** is greater than 10 and less than or equal to 140, triggering the `rowDeselected` event. The background color changes to red when the value of **Freight** is less than or equal to 10 during the `rowDeselected` event. Furthermore, the background color changes to yellow when the value of **Freight** is greater than 140 during the `rowDeselected` event. A notification message is displayed to indicate which event was triggered whenever a row is selected.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs192/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs192/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs192" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs192/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs192/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs192" %}
{% endif %}