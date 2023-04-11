---
layout: post
title: Tool bar in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Tool bar in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tool bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in ##Platform_Name## Grid control

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](../../api/grid/#toolbar) property accepts either the collection of built-in toolbar items and [`ItemModel`](../../api/toolbar/itemModel) objects for custom toolbar items or HTML element ID for toolbar template.

To use ToolBar, inject [`Toolbar`](../../api/grid/#toolbarmodule) module in the grid.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-enable-cs2/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-enable-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-enable-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-enable-cs2" %}
{% endif %}

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](../../api/grid/#created) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-bottom-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-bottom-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-bottom-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-bottom-cs1" %}
{% endif %}

## See Also

* [Toolbar Component](../../toolbar/getting-started/)
* [How to set overflow mode in Grid toolbar](https://www.syncfusion.com/kb/11524/how-to-set-overflow-mode-in-grid-toolbar)