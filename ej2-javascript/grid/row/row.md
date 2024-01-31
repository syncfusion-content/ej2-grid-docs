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

The row represents record details fetched from data source.

## Row customization

### Using event

You can customize the appearance of a row by using the [`rowDataBound`](../../api/grid/#rowdatabound) event. The [`rowDataBound`](../../api/grid/#rowdatabound) event triggers for every row. In the event handler, you can get the
[`RowDataBoundEventArgs`](../../api/grid/rowDataBoundEventArgs) that contains details of the row.

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

### Using CSS customize alternate rows

 You can change the grid's alternative rows' background color by overriding the **.e-altrow** class.

```
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer to the following example.

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

### Using CSS customize selected row

The background color of the selected row can be changed by overriding the following CSS style.

```
.e-grid td.e-active {
    background-color: #f9920b;
}
```

This is demonstrated in the following sample:

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

## Adding a new row programmatically

The Grid can add a new row between the existing rows using the [addRecord](../../api/grid/#addrecord) method of the Grid.

This is demonstrated in the following sample:

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

> When working with remote data, it is impossible to add a new row between the existing rows.

## How to get the row information when hovering over the cell

It is possible to get the row information when hovering over the specific cell. This can be achieved by using the [rowDataBound](../../api/grid#rowdatabound) event and [getRowInfo](../../api/grid#getrowinfo) method of the Grid.

In the following sample, the `mouseover` event is bound to a grid row in the `rowDataBound` event, and when hovering over the specific cell, using the `getRowInfo` method, row information will be retrieved and displayed in the console.

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

### See Also

* [How to get Data table row value on onclick event using JavaScript?](https://support.syncfusion.com/kb/article/10275/how-to-get-data-table-row-value-on-onclick-event-using-javascript)
* [How to maintain selected rows after adding new record](https://support.syncfusion.com/kb/article/10245/how-to-maintain-selected-rows-after-adding-new-record)
* [How to select the specific record in the grid using its primary key value](https://support.syncfusion.com/kb/article/10061/how-to-select-the-specific-record-in-the-grid-using-its-primary-key-value)
* [How to achieve drag and drop the rows in Grid with custom data binding](https://support.syncfusion.com/kb/11325/how-to-achieve-drag-and-drop-the-rows-in-grid-with-custom-data-binding)
* [How to get selected records on custom toolbar click](https://support.syncfusion.com/kb/11296/how-to-get-selected-records-on-custom-toolbar-click)