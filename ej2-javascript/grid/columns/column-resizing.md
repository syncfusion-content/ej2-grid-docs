---
layout: post
title: Column resizing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Column resizing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column resizing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in ##Platform_Name## Grid control

Grid component provides an intuitive user interface for resizing columns to fit their content. This feature allows users to easily adjust the width of the columns to improve readability and aesthetics of the data presented. To enable column resizing, set the [`allowResizing`](https://ej2.syncfusion.com/documentation/api/grid/#allowresizing) property of the grid to true.

Once column resizing is enabled, columns width can be resized by clicking and dragging at the right edge of the column header. While dragging the column, the width of the respective column will be resized immediately.

To use the column resize, inject **Resize** module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs10" %}
{% endif %}

> * You can disable resizing for a particular column by setting the [`columns.allowResizing`](https://ej2.syncfusion.com/documentation/api/grid/#allowresizing) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.
> * The `width` property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, you can override the default width by manually resizing the columns.

## Column resizing externally

To resize a column, set width to that particular column and then refresh the grid header by using the [`refreshHeader()`](../../api/grid/#refreshheader) method. Please refer the below code

```ts

var grid = document.getElementById('Grid').ej2_instances[0]; //Grid Instance

var columns = grid.columns;

columns[0].width = 150;

grid.refreshHeader();

```

## Restrict the resizing based on minimum and maximum width

The Grid component allows you to restrict the column width resizing between a minimum and maximum width. This can be useful when you want to ensure that your grid’s columns stay within a certain range of sizes.

To enable this feature, you can define the [`columns.minWidth`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/column/#minwidth) and [`columns.maxWidth`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/column/#maxwidth) properties of the columns directive for the respective column.

In the below code, **OrderID**, **Ship Name** and **Ship Country** columns are defined with minimum and maximum width. The **OrderID** column is set to have a minimum width of 100 pixels and a maximum width of 200 pixels. Similarly, the **ShipName** column is set to have a minimum width of 150 pixels and a maximum width of 300 pixels. The **ShipCountry** column is set to have a minimum width of 120 pixels and a maximum width of 280 pixels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs11" %}
{% endif %}

> The `maxWidth` and `minWidth` properties will be considered only when the user resizes the column. When resizing the window, these properties will not be considered. This is because columns cannot be re-rendered when resizing the window.

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for any particular stacked column by setting [`allowResizing`](../../api/grid/#allowresizing) as **false** to its columns.

In this example, we have disabled resize for **Ship City** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs12" %}
{% endif %}

## Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed. You can autoFit a column by using the Column menu of the grid.

The following screenshot represents the column resizing in touch device.

![Touch interaction image](../images/column-resizing.jpg)

## Resizing events

During the resizing action, the grid component triggers the below three events.

1. The [`resizeStart`](../../api/grid/#resizestart) event triggers when column resize starts.
2. The [`resizing`](../../api/grid/#resizing) event triggers when column header element is dragged (moved) continuously..
3. The [`resizeStop`](../../api/grid/#resizestop) event triggers when column resize ends.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs13" %}
{% endif %}
