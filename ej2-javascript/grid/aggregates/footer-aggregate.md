---
layout: post
title: Footer aggregate in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Footer aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in ##Platform_Name## Grid control

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](../../api/grid/aggregateColumn/#footertemplate) property to render the aggregate value in footer cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs2/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs2" %}
{% endif %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumn/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](../../api/grid/aggregateColumn/#format) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs3/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs3/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs3" %}
{% endif %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](../../api/grid/#databound) event, [getHeaderContent](../../api/grid/#getheadercontent), and [getFooterContent](../../api/grid/#getfootercontent) methods of the Grid.

In the following sample, the footer element is appended to the header element using the `getHeaderContent` and `getFooterContent` methods in the `dataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs4/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs4/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs4" %}
{% endif %}