---
layout: post
title: Cell selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Cell selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cell selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in ##Platform_Name## Grid control

Cell selection in the Grid component allows you to interactively select specific cells or ranges of cells within the grid. This selection can be done effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when you want to highlight, manipulate, or perform actions on specific cell within the Grid.

> To enable cell selection, you should set the [selectionSettings.mode](../../api/grid/selectionSettings/#mode) property to either **Cell** or **Both**. This property determines the selection mode of the grid.

## Single cell selection 

Single cell selection allows you to select a single cell within a Grid. This feature is useful when you want to focus on a specific cell or perform actions on individual cells within the grid.

To enable single cell selection, set the [selectionSettings.mode](../../api/grid/selectionSettings/#mode) property to **Cell** and the [selectionSettings.type](../../api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single cell at a time within the grid.

In the following example demonstrates how to enable single cell selection using property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs157/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs157/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs157" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs157/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs157/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs157" %}
{% endif %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](../../api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs158/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs158/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs158" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs158/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs158/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs158" %}
{% endif %}

> * If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.