---
layout: post
title: Exporting hierarchy grid in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Exporting hierarchy grid in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Exporting hierarchy grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Exporting hierarchy grid in ##Platform_Name## Grid control

The grid has an option to export the hierarchy grid to excel document. By default, it will use `Expanded` as hierarchyExportMode. you can change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the visible child grids in expanded state and remaining child grid in collapsed state when args.isChild property is set to true in [beforeExcelExport](../../api/grid/#beforeexcelexport) event. |
| All      | Exports the all the child grids in expanded state. |
| None     | Exports all child grids in collapsed state when args.isChild property is set to true in [beforeExcelExport](../../api/grid/#beforeexcelexport) event. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchy-print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-print-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchy-print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchy-print-cs1" %}
{% endif %}

## Limitations

* Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested level
  and if it exceeds more than seven levels then the document will be exported without outline option. Please refer the [Microsoft Limitation](https://docs.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations)