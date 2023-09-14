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

PDF export provides an option for exporting multiple grids to the same file. Multiple grids can be exported by providing their `IDs` in the `exportGrids` property of the grid.

## Same page

To export the grids on the same page, define `multipleExport.type` as `AppendToPage` in `exportProperties`. It also has an option to provide blank space between the grids. This blank space can be defined by using `multipleExport.blankSpace`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/export-mutiple-grid-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/export-mutiple-grid-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs3" %}
{% endif %}


## New page

PDF exporting provides support to export multiple grids on a new page. To export on a new page, define `multipleExport.type` as `NewSheet` in `exportProperties`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/export-mutiple-grid-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/export-mutiple-grid-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-mutiple-grid-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-mutiple-grid-cs4" %}
{% endif %}
