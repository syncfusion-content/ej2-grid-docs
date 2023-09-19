---
layout: post
title: Exporting detail template grid in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting detail template grid in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting detail template grid 
publishingplatform: ##Platform_Name##
documentation: ugs
domainurl: ##DomainURL##
---

# Exporting detail template grid in ##Platform_Name## Grid control

The grid has an option to export the detail template grid to excel document. By default, it will use `Expanded` as hierarchyExportMode. you can change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the visible detail rows in expanded state. |
| All      | Exports the all the detail rows in expanded state. |
| None     | Exports all detail rows in collapsed state. |

Detail rows in the exported Excel can be customized or formatted using [`exportDetailTemplate`](../../api/grid/#exportdetailtemplate) event. In this event, the detail rows of Excel document formatted with respect to its parent row details.

In the sample below, the detail template value has been structured with rows and cells format by specifying the [`columnHeader`](../../api/grid/detailTemplateProperties/#columnheader), and [`rows`](../../api/grid/detailTemplateProperties/#rows) parameters using its [`parentRow`](../../api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows us to create the detail rows in the Excel document. Additionally, you can apply custom styles to specific cells using the [`style`](../../api/grid/detailTemplateCell/#style) property.

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