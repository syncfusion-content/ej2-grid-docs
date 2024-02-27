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

# Toolbar in ##Platform_Name## Grid control

The toolbar in the Syncfusion ##Platform_Name## Grid control offers several general use cases to enhance data manipulation and overall experience. Actions such as adding, editing, and deleting records within the grid can be performed, providing efficient data manipulation capabilities. The toolbar also facilitates data export and import functionality, allowing you to generate downloadable files in formats like Excel, CSV, or PDF. 

To enable the toolbar functionality, you need to inject the **Toolbar** module in the grid. This module provides the necessary methods to interact with the toolbar items. The toolbar can be customized with built-in toolbar items or custom toolbar items using the [toolbar](../../api/grid/#toolbar) property. The `toolbar` property accepts an array of strings representing the built-in toolbar items or an array of [ItemModel](../../api/toolbar/itemModel) objects for custom toolbar items.

The following example demonstrates how to enable toolbar items in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-cs1" %}
{% endif %}

## Enable or disable toolbar items

Enabling or disabling toolbar items dynamically in Syncfusion ##Platform_Name## Grid is to provide control over the availability of specific functionality based on application logic. This feature allows you to customize the toolbar based on various conditions or individuals interactions. 

You can enable or disable toolbar items dynamically by using the [enableToolbarItems](../../api/grid/#enabletoolbaritems) method. This method allows you to control the availability of specific toolbar items based on your application logic.

In the following example, the [EJ2 Toggle Switch Button control](../../switch/getting-started) is added to enable and disable the toolbar items using `enableToolbarItems` method. When the switch is toggled, the [change](../../api/switch/#change) event is triggered and the toolbar items are updated accordingly.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-enable-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-enable-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-enable-cs2" %}
{% endif %}

## Add toolbar at the bottom of Grid

By adding the toolbar at the bottom of the Syncfusion ##Platform_Name## Grid, important actions and functionality remain consistently visible and easily accessible, providing easy access to actions and operations without the need for scrolling.

To add the toolbar at the bottom of the Grid, you can utilize the [created](../../api/grid/#created) event. By handling this event, you can dynamically insert the toolbar items at the desired position in the grid layout.

The following example shows how to add the toolbar items at the bootom using `created` event of the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-bottom-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-bottom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-bottom-cs1" %}
{% endif %}

## Customize toolbar buttons using CSS

Customizing toolbar buttons in Syncfusion ##Platform_Name## Grid using CSS involves modifying the appearance of built-in toolbar buttons by applying CSS styles. This provides a flexible and customizable way to enhance the visual presentation of the toolbar and create a cohesive interface.

The appearance of the built-in toolbar buttons can be modified by applying the following CSS styles.

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates how to change the background color of the `Add`, `Edit`, `Delete`, `Update` and `Cancel` toolbar buttons by applying CSS styles.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-customize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-customize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-customize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-customize-cs1" %}
{% endif %}

## See Also

* [Toolbar Control](../../toolbar/getting-started)
* [How to set overflow mode in Grid toolbar](https://support.syncfusion.com/kb/article/9929/how-to-set-overflow-mode-in-grid-toolbar)