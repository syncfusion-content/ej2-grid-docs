---
layout: post
title: Exporting Grid with Templates in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting grids with templates in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting grid with templates
publishingplatform: ##Platform_Name##
documentation: ugs
domainurl: ##DomainURL##
---

# Exporting grid with templates in ##Platform_Name## Grid control

The grid offers the option to export the column, detail, and caption templates to an Excel document. The template contains images, hyperlinks, and customized text.

## Exporting with column template

The Excel export feature enables the exporting of Grid columns containing images, hyperlinks, and customized text to an Excel document.

In the following sample, the hyperlinks and images are exported to Excel using [hyperlink](../../api/grid/excelQueryCellInfoEventArgs/#hyperlink) and [image](../../api/grid/excelQueryCellInfoEventArgs/#image) properties in the [excelQueryCellInfo](../../api/grid/#excelquerycellinfo) event.

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

The detail rows in the exported Excel can be customized or formatted using the [exportDetailTemplate](../../api/grid/#exportdetailtemplate) event. In this event, the detail rows of the Excel document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnHeader](../../api/grid/detailTemplateProperties/#columnheader) and [rows](../../api/grid/detailTemplateProperties/#rows) properties using its [parentRow](../../api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows for the creation of detail rows in the Excel document. Additionally, custom styles can be applied to specific cells using the [style](../../api/grid/detailTemplateCell/#style) property.

> When using [rowSpan](../../api/grid/detailTemplateCell/#rowspan), it is essential to provide the cell's [index](../../api/grid/detailTemplateCell/#index) for proper functionality.

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

The Excel export feature enables exporting of Grid with a caption template to an Excel document.

In the following sample, the customized caption text is exported to Excel using [captionText](../../api/grid/exportGroupCaptionEventArgs/#captiontext) property in the [exportGroupCaption](../../api/grid/#exportgroupcaption) event.

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
