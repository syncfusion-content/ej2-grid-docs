---
layout: post
title: Detail template in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Detail template in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Detail template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in ##Platform_Name## Grid control

The detail template provides additional information about a particular row by expanding or collapsing detail content. The [`detailTemplate`](../../api/grid/#detailtemplate) property accepts either the [template string](../../common/template-engine) or HTML element ID.

To use detail template, inject the [`DetailRow`](../../api/grid/detailRow)) module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/detail-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/detail-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/detail-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-cs1" %}
{% endif %}

## Rendering custom component

To render the custom component inside the detail row, define the template in the [`detailTemplate`](../../api/grid/#detailtemplate) and render the component in the [`detailDataBound`](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

For example, to render grid inside the detail row, place an HTML div element as the [`detailTemplate`](../../api/grid/#detailtemplate) and render the DIV element as grid component in the [`detailDataBound`](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/detail-template-childgrid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-childgrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/detail-template-childgrid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/detail-template-childgrid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-childgrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-childgrid-cs1" %}
{% endif %}

## Expand by external button

By default, detail rows render in collapsed state. You can expand a detail row by invoking the [`expand`](../../api/grid/detailRow/#expand) method using the external button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/detail-template-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/detail-template-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/detail-template-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-method-cs1" %}
{% endif %}

> * You can expand all the rows by using [`expandAll`](../../api/grid/detailRow/#expandall) method.
> * If you want to expand all the rows at initial Grid rendering, then use [`expandAll`](../../api/grid/detailRow/#expandall) method in [`dataBound`](../../api/grid/#databound) event of the Grid.

## Limitations for detail template

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence
* Hierarchy Grid