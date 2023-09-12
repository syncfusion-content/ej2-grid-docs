---
layout: post
title: Export multiple grids in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Export multiple grids 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in ##Platform_Name## Grid control

The excel export provides an option to export multiple grid data in the same excel file. Multiple grids can be exported by providing their `IDs` in the `exportGrids` property of grid.

## Same sheet

To export the grids in same sheet, define `multipleExport.type` as `AppendToSheet` in `exportProperties`. It also have an option to provide blank rows between the grids. These blank rows count can be defined by using  `multipleExport.blankRows`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/export-mutiple-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/export-mutiple-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs1" %}
{% endif %}

>By default, `multipleExport.blankRows` value is 5.

## New sheet

Excel exporting provides support to export multiple grids in new sheet. To export in new sheet, define  `multipleExport.type` as `NewSheet` in `exportProperties`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/export-mutiple-grid-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/export-mutiple-grid-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs2" %}
{% endif %}