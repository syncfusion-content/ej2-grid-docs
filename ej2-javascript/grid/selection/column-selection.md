---
layout: post
title: Column selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Column selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column selection in ##Platform_Name## Grid control

Column selection in grid control allows you to select one or more columns using mouse interactions or arrow keys. This feature is useful when you want to highlight, manipulate, or perform actions on specific columns within the Grid.

To enable column selection in the Grid, you need to set the [selectionSettings->allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. 

Here's an example of how to enable column selection using `allowColumnSelection` property in the Grid control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/selected-index-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/selected-index-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/selected-index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/selected-index-cs1" %}
{% endif %}

## Single column selection 

The ##Platform_Name## Grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To enable single column selection, set the [selectionSettings->allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings->type](../../api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single column at a time within the grid.

Here's an example of how to enable single column selection using `allowColumnSelection` and `type` property :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-single-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-single-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-single-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-single-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-single-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-single-selection-cs1" %}
{% endif %}

## Multiple column selection 

The ##Platform_Name## Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To enable multiple column selection, set the [selectionSettings->allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings->type](../../api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select a multiple column at a time within the grid.

Here's an example of how to enable multiple column selection using `allowColumnSelection` and `type` property :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-multi-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-multi-selection-cs1" %}
{% endif %}

## Select columns externally 

You can perform single column selection, multiple column selection, and range of column selection externally in a Grid using built-in methods. This feature allows you to interact with specific columns within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single column selection

The ##Platform_Name## grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To achieve single column selection, you can use the [selectColumn](../../api/grid/selection/#selectcolumn) method. This method selects the column by passing the column index as a parameter.

> Column selection requires the [selectionSettings->allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](../../api/grid/selectionSettings/#type) should be **Single**.

The following example, demonstrates how to select a single column within the Grid by obtaining the selected column index through a textbox control and passing these column index as argument to the `selectColumn` method. When the button event is triggered by clicking the **Select Column** button, a single column is selected within the Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs1" %}
{% endif %}

### Multiple column selection

The ##Platform_Name## Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To achieve multiple column selection, you can use the [selectColumns](../../api/grid/selection/#selectcolumns) method. This method selects the columns by passing an array of column indexes as a parameter.

> Column selection requires the [selectionSettings->allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](../../api/grid/selectionSettings/#type) should be **Multiple**.

The following example demonstrates how to select multiple columns in the Grid by calling the `selectColumns` method within the button click event and passing an array of column indexes as arguments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs2" %}
{% endif %}

### Range of column selection 

Range of column selection allows you to select a group of columns within the Grid. This feature is particularly useful when you need to perform actions on a consecutive set of columns or focus on specific column ranges.

To achieve range of column selection, you can use the [selectColumnsByRange](../../api/grid/selection/#selectcolumnsbyrange) method. This method selects the columns by specifying the start and end column indexes.

The following example demonstrates how to select a range of columns within the Grid by obtaining the selected column's start index and end index through textbox controls. Then, pass these start index and end index as arguments to the `selectColumnsByRange` method. When you trigger the button event by clicking the **Select Columns** button, a range of columns is selected within the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs3" %}
{% endif %}

### Select with existing column 

Select with existing column allows you to add a column to the current selection without clearing the existing column selection in the Grid control. This feature is valuable when you want to expand your selection to include additional columns while preserving previously selected columns.

To achieve this, you can use the [selectColumnWithExisting](../../api/grid/selection/#selectcolumnwithexisting) method. This method selects a column along with an existing column by specifying the column index as a parameter.

The following example demonstrates how to select a column with an existing column by obtaining the selected column index through a textbox control and passing this column index as an argument to the `selectColumnWithExisting` method. When you trigger the button event by clicking the **Select Columns** button, it selects the specified column along with any existing selections within the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs4" %}
{% endif %}

##  Clear column selection programmatically 

Clearing column selection programmatically in the Grid control is a useful feature when you want to remove any existing column selections. To achieve this, you can use the [clearColumnSelection](../../api/grid/selection/#clearcolumnselection) method.

>The `clearColumnSelection` method is applicable when the selection [type](../../api/grid/selectionSettings/#type) is set to **Multiple** or **Single**.

In the following example, it demonstrates how to clear column selection by calling the `clearColumnSelection` method in the button click event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-clearselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-clearselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-clearselection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-clearselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-clearselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-clearselection-cs1" %}
{% endif %}

## Column selection events 

The Grid provides several events related to column selection that allow you to respond to and customize the behavior of column selection. Here are the available column selection events:

[columnSelecting](../../api/grid/#columnselecting): This event is triggered before any column selection occurs. It provides an opportunity to implement custom logic or validation before a column is selected, allowing you to control the selection process.

[columnSelected](../../api/grid/#columnselected): This event is triggered after a column is successfully selected. You can use this event to perform actions or updates when a column is selected.

[columnDeselecting](../../api/grid/#columndeselecting): This event is triggered just before a selected column is deselected. It allows you to perform custom logic or validation to decide whether the column should be deselected or not.

[columnDeselected](../../api/grid/#columndeselected): This event is triggered when a particular selected column is deselected. You can use this event to perform actions or validations when a column is no longer selected.

In the following example, column selection is canceled when the value of `field` is equal to **CustomerID** within the `columnSelecting` event. The **headerCell** background color changes to green when the `columnSelected` event is triggered, and it changes to red when the `columnDeselecting` event is triggered. Furthermore, column selection is canceled when the value of `field` is equal to **CustomerID** within the `columnDeselected` event is triggered. A notification message is displayed to indicate which event was triggered whenever a column is selected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-selection-event/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-selection-event/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-selection-event" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-selection-event/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-selection-event/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-selection-event" %}
{% endif %}