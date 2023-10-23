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

You can prevent specific rows from being selected in the checkbox selection mode by hiding the checkboxes using the [rowDataBound](../../api/grid/#rowdatabound) event. You achieve this by setting the [isSelectable](../../api/grid/rowDataBoundEventArgs/#isselectable) argument as false in the `rowDataBound` event based on certain conditions as per the needs of the application.

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