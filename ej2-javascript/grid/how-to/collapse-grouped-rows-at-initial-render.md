---
layout: post
title: Collapse grouped rows at initial render in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Collapse grouped rows at initial render in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Collapse grouped rows at initial render 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Collapse grouped rows at initial render in ##Platform_Name## Grid control

You can collapse all the grouped rows at initial rendering by using `dataBound` event with  `collapseAll` method of the grid.

In the below demo, all the grouped rows are collapsed at initial rendering.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs105/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs105/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs105" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs105/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs105/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs105" %}
{% endif %}