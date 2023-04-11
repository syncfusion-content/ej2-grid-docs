---
layout: post
title: Auto wrap in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Auto wrap in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto wrap 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto wrap in ##Platform_Name## Grid control

The auto wrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words. To enable auto wrap, set the [`allowTextWrap`](../../api/grid/#allowtextwrap) property to `true`. You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings) property.

There are three types of [`wrapMode`](../../api/grid/textWrapSettings/#wrapmode). They are:

* **Both**: **Both** value is set by default. Auto wrap will be enabled for both the content and the header.
* **Header**: Auto wrap will be enabled only for the header.
* **Content**: Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the grid's width.

In the following example, the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings/#wrapmode) is set to **Content**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/autowrap-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autowrap-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/autowrap-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/autowrap-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autowrap-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autowrap-cs1" %}
{% endif %}