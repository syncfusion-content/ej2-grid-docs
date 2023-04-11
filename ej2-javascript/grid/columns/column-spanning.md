---
layout: post
title: Column spanning in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Column spanning in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column spanning 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in ##Platform_Name## Grid control

The grid has option to span the adjacent cells. You need to define the [`colSpan`](../../api/grid/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](../../api/grid/queryCellInfoEventArgs) event.

In the following demo, employee **Davolio** is doing analysis from 9.00 A.M. to 10.00 A.M. so that the cells have been spanned.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-spanning-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-spanning-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-spanning-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-spanning-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-spanning-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-spanning-cs1" %}
{% endif %}