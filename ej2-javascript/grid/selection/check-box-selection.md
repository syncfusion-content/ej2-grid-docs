---
layout: post
title: Check box selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Check box selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check box selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in ##Platform_Name## Grid component

Checkbox selection in the Grid component allows you to provide an option to select multiple records by using a checkbox in each row. This feature is particularly useful when you need to perform bulk actions or operations on selected records within the Grid.

To render checkbox in each grid row, you need to use checkbox column with type as **checkbox** using column [type](../../api/grid/column/#type) property.

Here's an example of how to enable check box selection using `type` property in the Grid component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs159/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs159/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs159" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs159/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs159/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs159" %}
{% endif %}

> * By default selection is allowed by clicking a grid row or checkbox in that row. To allow selection only through checkbox, you can set [selectionSettings.checkboxOnly](../../api/grid/selectionSettings/#checkboxonly) property to **true**.
> * Selection can be persisted on all the operations using [selectionSettings.persistSelection](../../api/grid/selectionSettings/#persistselection) property. For persisting selection on the Grid, any one of the column should be defined as a primary key using [columns.isPrimaryKey](../../api/grid/column/#isprimarykey) property.

## Checkbox selection mode

The checkbox selection mode in the Grid allows you to select rows either by clicking on checkboxes or by clicking on the rows themselves. This feature provides two types of checkbox selection modes that can be set using the [selectionSettings.checkboxMode](../../api/grid/selectionSettings/#checkboxmode) property. The available modes are:

* **Default**: This is the default value of the `checkboxMode`. In this mode, you can select multiple rows by clicking rows one by one. When you click on a row, the checkbox associated with that row also switches to the 'checked' state.
* **ResetOnRowClick**: In `ResetOnRowClick` mode, when clicking on row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

In the following example, it demonstrates how to dynamically enable and change the `checkboxMode` using the `DropDownList` component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs160/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs160/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs160" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs160/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs160/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs160" %}
{% endif %}

## Hide selectall checkbox in column header 

You can hide the select all checkbox in the column header of the Syncfusion Grid. This is a useful feature in various scenarios where you want to customize the appearance and behavior of the checkboxes within the grid.

By default, when you set the column type as [checkbox](../../api/grid/column/#type), it renders a column with checkboxes for selection purposes. However, if you want to hide the header checkbox, you can achieve this by defining an empty [HeaderTemplate](../../api/grid/column/#headertemplate) directive in the grid Column.

Here's an example of how to hide selectall checkbox in column header using empty `HeaderTemplate` directive in the Grid component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hide-checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hide-checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hide-checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hide-checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hide-checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hide-checkbox-cs1" %}
{% endif %}

## Prevent specific rows from being selected in checkbox selection

The checkbox selection mode allows you to select rows either by clicking on checkboxes or by clicking on the rows themselves. However, there might be scenarios where you want to prevent specific rows from being selected based on certain conditions or business requirements.

To achieve this, you can use the [rowDataBound](../../api/grid/#rowdatabound) event of the Grid. The `rowDataBound` event is triggered for each row after it is bound to the data source. In this event, you can check the row data and determine whether the row should be selectable or not. If you want to prevent the row from being selected, you can set the [isSelectable](../../api/grid/rowDataBoundEventArgs/#isselectable) argument of the event to **false**.

In the following sample, the selection of specific rows has been prevented based on the `isSelectable` argument in the `rowDataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs161/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs161/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs161" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs161/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs161/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs161" %}
{% endif %}

## How to select single row in checkbox selection mode

The ##Platform_Name## Grid allows you to select only one row at a time within the Grid. This feature is particularly useful when you want to ensure that only a single row is selected, and any previous selections are cleared when a new row is selected.

To achieve single-row selection in checkbox selection mode within the Grid, you can handle the [rowSelecting](../../api/grid/#rowselecting) event and use the [clearSelection](../../api/grid/#clearselection) method to clear any previous selections before selecting a new row. This ensures that only one row is selected at a time, and any prior selections are deselected when a new row is chosen.

> When you set the [checkboxMode](../../api/grid/selectionSettings/#checkboxmode) property to **ResetOnRowClick**, it will reset the previously selected row when you click on a new row. Please note that this behavior applies to rows and not checkboxes, and it is the default behavior of the grid.

Here's an example of how to select a single row in checkbox selection mode using the `clearSelection` method along with the `rowSelecting` event:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/checkbox-single-row-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-single-row-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/checkbox-single-row-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/checkbox-single-row-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-single-row-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/checkbox-single-row-selection-cs1" %}
{% endif %}

## Allow selection only through checkbox click

By default, the Grid component allows selection by clicking either a grid row or the checkbox within that row. If you want to restrict selection so that it can only be done by clicking the checkboxes, you can set the [selectionSettings.checkboxOnly](../../api/grid/selectionSettings/#checkboxonly) property to **true**.

Here's an example of how to enable selection only through checkbox click using `checkboxOnly` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/checkbox-single-selectionmode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-single-selectionmode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/checkbox-single-selectionmode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/checkbox-single-selectionmode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-single-selectionmode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/checkbox-single-selectionmode-cs1" %}
{% endif %}