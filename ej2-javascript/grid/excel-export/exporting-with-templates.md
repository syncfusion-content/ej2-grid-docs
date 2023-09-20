---
layout: post
title: Exporting grid with templates in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting grid with templates in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting grid with templates
publishingplatform: ##Platform_Name##
documentation: ugs
domainurl: ##DomainURL##
---

# Exporting grid with templates in ##Platform_Name## Grid control

The grid has an option to export the column template, detail template and caption template to an Excel document.

## Exporting with column template

Excel export allows exporting Grid column with Image, Hyperlink and customized data to an excel document.

In the below sample, the hyperlinks and images are exported to Excel by using [hyperlink] and [image] properties in the [excelQueryCellInfo] event.

> Excel Export supports base 64 string to export the images.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-template-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-export-cs2" %}
{% endif %}

## Exporting with detail template

 By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

Detail rows in the exported Excel can be customized or formatted using the [exportDetailTemplate](../../api/grid/#exportdetailtemplate) event. In this event, the detail rows of the Excel document are formatted with respect to their parent row details.

In the following sample, the detail template value has been structured with rows and cells format by specifying the [columnHeader](../../api/grid/detailTemplateProperties/#columnheader) and [rows](../../api/grid/detailTemplateProperties/#rows) parameters using its [parentRow](../../api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows us to create detail rows in the Excel document. Additionally, apply custom styles to specific cells using the [style](../../api/grid/detailTemplateCell/#style) property.

> When using [rowSpan](../../api/grid/detailTemplateCell/#rowspan), it's essential to provide the cell's [index](../../api/grid/detailTemplateCell/#index) for proper functionality.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/detail-template-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/detail-template-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/detail-template-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-export-cs2" %}
{% endif %}

## Exporting with caption template

Excel export allows exporting Grid with caption template to an excel document.

In the below sample, the customized caption text is exported to Excel by using [captionText] property in the [exportGroupCaption] event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/caption-template-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/caption-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/caption-template-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/caption-template-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/caption-template-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/caption-template-export-cs2" %}
{% endif %}