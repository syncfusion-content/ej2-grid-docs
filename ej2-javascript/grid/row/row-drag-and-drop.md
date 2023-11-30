---
layout: post
title: Row drag and drop in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row drag and drop 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in ##Platform_Name## Grid control

The Syncfusion ##Platform_Name## Grid control provides built-in support for row drag and drop functionality. This feature allows you to easily rearrange rows within the grid by dragging and dropping them to new positions. Additionally, you can also drag and drop rows from one grid to another grid, as well as drag and drop rows to custom controls.

To use the row drag and drop feature in Grid control, you need to inject the **RowDD** module in the grid. The **RowDD** is responsible for handling the row drag and drop functionality in the grid control. Once you have injected the **RowDD**, you can then use the [allowRowDragAndDrop](../../api/grid/#allowrowdraganddrop) and [targetID](../../api/grid/rowDropSettings/#targetid) properties to enable and configure the row drag and drop feature in the Grid.

## Drag and drop within grid

The drag and drop feature allows you to rearrange rows within the grid by dragging them using a drag icon. This feature can be enabled by setting the [allowRowDragAndDrop](../../api/grid/#allowrowdraganddrop) property to **true**. This property is a boolean value that determines whether row drag and drop is enabled or not. By default, it is set to **false**, which means that row drag and drop is disabled.

Here's an example of how to enable drag and drop within the Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-single-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-single-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-cs1" %}
{% endif %}

## Drag and drop to grid 

The grid row drag and drop allows you to drag grid rows and drop to another grid. This feature can be enabled by setting the [allowRowDragAndDrop](../../api/grid/#allowrowdraganddrop) property to **true** in the Grid control. This property specifies whether to enable or disable the row drag and drop feature in the Grid. By default, this property is set to **false**, which means that row drag and drop functionality is not enabled.

To specify the target control where the grid rows should be dropped, use the [targetID](../../api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](../../api/grid/rowDropSettings/) object. The `targetID` property takes the ID of the target control as its value.

Here's an example code snippet that demonstrates how to enable Row drag and drop another Grid control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-cs1" %}
{% endif %}

> * The row drag and drop feature is not supported in virtual scrolling and frozen rows and columns mode.
> * In order to use row drag and drop, you need to inject the **RowDD** module in the grid.

## Drag and drop to custom control

The Grid provides the feature to drag and drop grid rows to any custom control. This feature allows you to easily move rows from one control to another without having to manually copy and paste data. To enable row drag and drop, you need to set the [allowRowDragAndDrop](../../api/grid/#allowrowdraganddrop) property to **true** and defining the custom control ID in the [targetID](../../api/grid/rowDropSettings/#targetid) property of the `rowDropSettings` object. The ID provided in `targetID` should correspond to the ID of the target control where the rows are to be dropped.

In the below example, the selected grid row is dragged and dropped in to the TreeGrid control by using [rowDrop](../../api/grid/#rowdrop) event. Once the row is dropped into the TreeGrid control, we have removed the corresponding grid row from grid and its data inserted in custom control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-custom-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-custom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-custom-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-custom-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-custom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-custom-cs1" %}
{% endif %}

> * The `rowDrop` event is fired when a row is dropped onto a custom control, regardless of whether the drop is successful or not. You can use the `args.cancel` property to prevent the default action.

## Drag and drop rows without drag icon

By default, when performing a drag and drop operation in the Syncfusion Grid, drag icons are displayed. However, in some cases, you may want to hide these drag icons. This can be achieved by setting the [targetID](../../api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](../../api/grid/rowDropSettings/) object to the current Grid's ID.

By setting the `targetID`, the Grid will render without a helper icon for row dragging. You can then customize the drag and drop action by binding to the [rowDrop](../../api/grid/#rowdrop) event of the Grid. In the `rowDrop` event, you can prevent the default action by setting `args.cancel` to **true**, and reorder the rows using the [reorderRows](../../api/grid/#reorderrows) method of the Grid.

Here's an example of how to hide the drag and drop icon in the Syncfusion Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-single-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-single-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-cs2" %}
{% endif %}

> * The selection feature must be enabled in the Grid to allow users to select rows before performing the drag and drop operation.
> * Multiple rows can be selected by clicking and dragging inside the grid. For multiple row selection, the [type](../../api/grid/selectionSettings/#type) property must be set to **Multiple**.

## Drag and drop events

The Grid control provides a set of events that are triggered during drag and drop operations on grid rows. These events allow you to customize the drag element, track the progress of the dragging operation, and perform actions when a row is dropped on a target element. The following events are available:

1. [rowDragStartHelper](../../api/grid/#rowdragstarthelper): This event is triggered when a click occurs on the drag icon or a grid row. It allows you to customize the drag element based on specific criteria.

2. [rowDragStart](../../api/grid/#rowdragstart): This event is triggered when the dragging of a grid row starts.

3. [rowDrag](../../api/grid/#rowdrag): This event is triggered continuously while the grid row is being dragged.

4. [rowDrop](../../api/grid/#rowdrop): This event is triggered when a drag element is dropped onto a target element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-event-cs1" %}
{% endif %}

## Limitations

* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with row template, detail template, hierarchy grid and grouping features of grid.

## See also

[Sorting data in the Syncfusion Grid](../sorting.md)
[Filtering data in the Syncfusion Grid](../filtering/filtering.md)
