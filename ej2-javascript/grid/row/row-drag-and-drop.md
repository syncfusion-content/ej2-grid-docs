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

The grid row drag and drop allows you to drag and drop grid rows to another grid or custom component. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) to true. The target component where the grid rows are to be dropped can be set by using the [`targetID`](../../api/grid/rowDropSettings/#targetid).

To use row drag and drop, inject the **RowDD** module in the grid.

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

> * Selection feature must be enabled for row drag and drop.
> * Multiple rows can be selected by clicking and dragging inside the grid.
For multiple row selection, the [`type`](../../api/grid/selectionSettings/#type) property must be set to **multiple**.

## Drag and drop within Grid

The grid row drag and drop allows you to drag and drop grid rows on the same grid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) to true.

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

## Drag and drop to custom component

You can drag and drop the grid rows to any custom component. To enable row drag and drop, set the [`allowRowDragAndDrop`](../../api/grid/#allowrowdraganddrop) as true and define the custom component id in [`targetID`](../../api/grid/rowDropSettings/#targetid) property of rowDropSettings.

In the below example, the selected grid row is dragged and dropped in to the TreeView component by using [`rowDrop`](../../api/grid/#rowdrop) event. Once the row is dropped into the TreeView component, we have removed the corresponding grid row from grid and its data inserted in custom component. To know more information about the drag and drop events check [`here`](https://ej2.syncfusion.com/documentation/grid/row/?no-cache=1#drag-and-drop-events).

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

## Drag and drop with sorting and filtering

In the following demo, you can achieve the grid row drag and drop support with filtering and sorting using [`rowDrop`](../../api/grid/rowDragEventArgs) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/draganddrop-single-filter-sort-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-filter-sort-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-filter-sort-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/draganddrop-single-filter-sort-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/draganddrop-single-filter-sort-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/draganddrop-single-filter-sort-cs1" %}
{% endif %}

> * You can enable/disable the drag icon by using **disableRowDD** method which is achieved in the [`actionComplete`](../../api/grid/actionEventArgs) event.

```ts
    actionComplete: function (args) {
        if (this.filterSettings.columns.length) {
            this.disableRowDD(true);
        }
        else {
            this.disableRowDD(false);
        }
    }

```

## Drag and drop events

The following events are triggered while drag and drop the grid rows.

[`rowDragStartHelper`](../../api/grid/#rowdragstarthelper) - Triggers when click the drag icon or grid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](../../api/grid/#rowdragstart) -Triggers when starts to drag the grid row. <br/>
[`rowDrag`](../../api/grid/#rowdrag) - Triggers while dragging the grid row. <br/>
[`rowDrop`](../../api/grid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

## Drag and drop rows without drag icon

You can hide the drag and drop icon when performing a drag and drop operation within the grid. This can be achieved by setting the [targetID](../../api/grid/rowDropSettings/#targetid) of the [rowDropSettings](../../api/grid/rowDropSettings/) as the current Grid’s ID.

By setting the [targetID](../../api/grid/rowDropSettings/#targetid), the Grid will render without a helper icon (for row drag). Now you can customize the drag and drop action. To control the drop action, you can bind the [rowDrop](../../api/grid/#rowdrop) event of the Grid. In the [rowDrop](../../api/grid/#rowdrop) event, you can prevent the default action(args.cancel as true) and reorder the rows using [reorderRows](../../api/grid/#reorderrows) method of the Grid.

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

## Limitations

* Multiple rows can be drag and drop in the row selections basis.
* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with sorting, filtering, hierarchy grid and grouping features of grid. However we can achieve sorting and filtering behavior by sample side customization which will be explained in the previous topic.