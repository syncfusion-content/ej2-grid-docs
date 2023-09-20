---
layout: post
title: Exporting detail template grid in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting detail template grid in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting detail template grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting detail template grid in ##Platform_Name## Grid control

The grid has the option to export the detail template to a PDF document. By default, the grid will export the master grid with expanded detail rows alone. Change the exporting option by using the `PdfExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded detail rows. |
| All      | Exports the master grid with all the detail rows. |
| None     | Exports the master grid alone. |

Detail rows in the exported PDF can be customized or formatted using the [`exportDetailTemplate`](../../api/grid/#exportdetailtemplate) event. In this event, format the detail row of the exported PDF document based on its parent row details.

In the following sample, the detail template value has been structured with rows and cells format by specifying the [`columnCount`](../../api/grid/detailTemplateProperties/#columncount), [`columnHeader`](../../api/grid/detailTemplateProperties/#columnheader), and [`rows`](../../api/grid/detailTemplateProperties/#rows) parameters using its [`parentRow`](../../api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows you to create a PDF grid inside the detail row. Additionally, apply custom styles to specific cells using the [`style`](../../api/grid/detailTemplateCell/#style) property.

> If a value for the `columnCount` is not provided, the PDF grid's columns in the detail row will be generated based on the count of the `columnHeader`/`rows` first row's `cells`(../../api/grid/detailTemplateRow/#cells).s
> When using [`rowSpan`](../../api/grid/detailTemplateCell/#rowspan), it's essential to provide the cell's [`index`](../../api/grid/detailTemplateCell/#index) for proper functionality.

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

## Limitations

* The export feature for detail templates is not supported with server-side exporting.