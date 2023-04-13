---
layout: post
title: Auto fit columns in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto fit columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in ##Platform_Name## Grid control

The [`autoFitColumns`](../../api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method in [`dataBound`](../../api/grid/#dataBound) event.

To use the [`autoFitColumns`](../../api/grid/#autofitcolumns) method, inject the **Resize** module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/autofit-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/autofit-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs1" %}
{% endif %}

> You can autofit all the columns by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method without column names.