---
layout: post
title: Exporting grid with templates in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting grid with templates in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting grid with templates
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid with templates in ##Platform_Name## Grid control

The grid has an option to export the column template, detail template and caption template to a PDF document.

## Exporting with column template

PDF export allows exporting Grid column with Image, Hyperlink and customized data to a PDF document.

In the below sample, the hyperlinks and images are exported to PDF by using [hyperlink](../../api/grid/pdfQueryCellInfoEventArgs/#hyperlink) and [image](../../api/grid/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](../../api/grid/#pdfquerycellinfo) event.

> PDF Export supports base 64 string to export the images.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-template-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-export-cs1" %}
{% endif %}

## Exporting with detail template

By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `PdfExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

Detail rows in the exported PDF can be customized or formatted using the [exportDetailTemplate](../../api/grid/#exportdetailtemplate) event. In this event, format the detail row of the exported PDF document based on its parent row details.

In the following sample, the detail row content formatted by specifying the [columnCount](../../api/grid/detailTemplateProperties/#columncount), [columnHeader](../../api/grid/detailTemplateProperties/#columnheader), and [rows](../../api/grid/detailTemplateProperties/#rows) properties using its [parentRow](../../api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows to create a PDF grid inside the detail row. Additionally, apply custom styles to specific cells using the [style](../../api/grid/detailTemplateCell/#style) property.

> If `columnCount` is not provided, the PDF grid's columns in the detail row will be generated based on the count of the `columnHeader`/`rows` first row's [cells](../../api/grid/detailTemplateRow/#cells).
> When using [rowSpan](../../api/grid/detailTemplateCell/#rowspan), it's essential to provide the cell's [index](../../api/grid/detailTemplateCell/#index) for proper functionality.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/detail-template-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/detail-template-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/detail-template-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/detail-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-export-cs1" %}
{% endif %}

## Exporting with caption template

PDF export allows exporting Grid with caption template to a PDF document.

In the below sample, the customized caption text is exported to PDF by using [captionText] property in the [exportGroupCaption] event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/caption-template-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/caption-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/caption-template-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/caption-template-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/caption-template-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/caption-template-export-cs1" %}
{% endif %}