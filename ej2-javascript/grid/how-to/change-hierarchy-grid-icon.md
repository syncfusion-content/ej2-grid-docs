---
layout: post
title: Change hierarchy grid icon in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Change hierarchy grid icon in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change hierarchy grid icon 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change hierarchy grid icon in ##Platform_Name## Grid control

You can change default expand/collapse icon of the Hierarchy Grid by using custom Css.

You can change the content code of the corresponding icon which you want.

To use hierarchical binding, inject the [`DetailRow`](../../api/grid/detailRow) module in the grid.

**Css**:

Use the below css in your `index.html` file.

```
    .e-grid .e-icon-grightarrow::before,
        .e-grid-menu .e-icon-grightarrow::before {
            content: '\e7f9';
        }
    .e-grid .e-icon-gdownarrow::before,
        .e-grid-menu .e-icon-gdownarrow::before {
            content: '\e934';
        }

```

In this below demo, we have changed the expand/collapse icon to Plus/Minus icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/changeicon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/changeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/changeicon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/changeicon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/changeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/changeicon-cs1" %}
{% endif %}