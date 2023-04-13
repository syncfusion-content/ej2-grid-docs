---
layout: post
title: Cell in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Cell in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cell 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cell in ##Platform_Name## Grid control

## Cell customization

The appearance of cells can be customized by using the [`queryCellInfo`](../../api/grid/#querycellinfo) event. The [`queryCellInfo`](../../api/grid/#querycellinfo) event triggers for every cell. In that event handler, you can get [`QueryCellInfoEventArgs`](../../api/grid/queryCellInfoEventArgs) that contains the details of the cell.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-cell-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-cell-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs1" %}
{% endif %}

## Custom attributes

You can customize the grid cells by adding a CSS class to the [`customAttribute`](../../api/grid/column#customattributes) property of the column.

```css
.e-attr {
    background: '#d7f0f4';
}
```

```ts
{
    field: "ShipCity", headerText: "Ship City", customAttributes: {class: "e-attr"}, width: "120"
}
```

In the below example, we have customized the cells of **OrderID** and **ShipCity** columns.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-attribute-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-attribute-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-attribute-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-attribute-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-attribute-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-attribute-cs1" %}
{% endif %}

## Grid lines

The [`gridLines`](../../api/grid/#gridlines) have option to display cell border and it can be defined by the
[`gridLines`](../../api/grid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs1" %}
{% endif %}

>By default, the grid renders with **Default** mode.

## See Also

* [How to get the clicked Grid cell details](https://www.syncfusion.com/kb/11537/how-to-get-the-clicked-grid-cell-details)
* [How to customize the Grid cell values while exporting](https://www.syncfusion.com/kb/11324/how-to-customize-the-grid-cell-values-while-exporting)