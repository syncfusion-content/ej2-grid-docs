---
layout: post
title: Group and caption aggregate in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Group and caption aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in ##Platform_Name## Grid control

Group and caption aggregate values are calculated from the current group items. If [`groupFooterTemplate`](../../api/grid/aggregateColumn/#groupfootertemplate) is provided, the aggregate values are displayed in the group footer cells; and if [`groupCaptionTemplate`](../../api/grid/aggregateColumn/#groupcaptiontemplate) is provided, aggregate values are displayed in the group caption cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs5" %}
{% endif %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumn/#type)
name.