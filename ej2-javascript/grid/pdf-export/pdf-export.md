---
layout: post
title: Pdf export in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Pdf export in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pdf export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in ##Platform_Name## Grid control

The PDF export feature in the Syncfusion ##Platform_Name## Grid allows you to export grid data to a PDF document, providing the ability to generate printable reports or share data in a standardized format.

To enable PDF export in the grid, you need to set the [allowPdfExport](../../api/grid/#allowpdfexport) property to **true** and use the [pdfExport](../../api/grid/#pdfexport) method for exporting. 

To use PDF export, inject the **PdfExportService** in the **Grid**.

The following example demonstrates how to perform a PDF export action in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs148/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs148/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs148" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs148/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs148/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs148" %}
{% endif %}

## Show spinner while exporting

Showing a spinner while exporting in the Syncfusion ##Platform_Name## Grid enhances the experience by displaying a spinner during the export process. This feature provides a visual indication of the export progress, improving the understanding of the exporting process.

To show or hide a spinner while exporting the grid, you can utilize the [showSpinner](../../documentation/api/grid/#showspinner) and [hideSpinner](../../documentation/api/grid/#hidespinner) methods provided by the Grid within the [toolbarClick](../../documentation/api/grid/#toolbarclick) event.

The `toolbarClick` event is triggered when a toolbar item in the Grid is clicked. Within the event handler, the code checks if the clicked **item** is related with PDF export, specifically the **Grid_pdfexport** item. If a match is found, the `showSpinner` method is used on the Grid instance to display the spinner. 

To hide the spinner after the exporting is completed, bind the [pdfExportComplete](../../api/grid/#pdfexportcomplete) event and use the `hideSpinner` method on the Grid instance to hide the spinner.

The following example demonstrates how to show and hide the spinner during PDF export in a grid.
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs149/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs149/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs149" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs149/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs149/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs149" %}
{% endif %}

## Binding custom data source while exporting

The Syncfusion ##Platform_Name## Grid component provides a convenient way to export data to a PDF format. With the PDF export feature, you can define a custom data source while exporting. This allows you to export data that is not necessarily bind to the grid, which can be generated or retrieved based on your application logic.

To export data, you need to define the [dataSource](../../api/grid/pdfExportProperties/#datasource) property within the [pdfExportProperties](../../documentation/api/grid/pdfExportProperties/) object. This property represents the data source that will be used for the PDF export.

The following example demonstrates how to render custom data source during PDF export. By utilizing the [pdfExport](../../documentation/api/grid/#pdfexport) method and passing the `pdfExportProperties` object through the grid instance, the grid data will be exported to a PDF using the dynamically defined data source.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs150/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs150/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs150" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs150/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs150/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs150" %}
{% endif %}

> Make sure to utilize the [field](../../api/grid/column/#field) property that you have declared in the grid columns when modifying the data source for exporting.

## Exporting with custom aggregate

Custom aggregates in the Syncfusion ##Platform_Name## Grid involves exporting grid data that includes additional calculated values based on specific requirements. This feature enables you to show the comprehensive view of the data in the exported file by incorporating the specific aggregated information you need for analysis or reporting purposes.

In order to utilize custom aggregation, you need to specify the [type](../../api/grid/aggregateColumnDirective/#type) property as **Custom** and provide the custom aggregate function in the [customAggregate](../../documentation/api/grid/aggregateColumnDirective/#customaggregate) property. 

Within the **customAggregateFn** function, it takes an input data that contains a result property. The function calculates the count of objects in this data where the **ShipCountry** field value is equal to **Brazil** and returns the count with a descriptive label.

The following example shows how to export the grid with a custom aggregate that shows the calculation of the **Brazil** count of the **ShipCountry** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs151/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs151/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs151" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs151/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs151/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs151" %}
{% endif %}

## Exporting with cell and row spanning

Exporting data from the Syncfusion ##Platform_Name## Grid with cell and row spanning enables you to maintain cell and row layout in the exported data. This feature is useful when you have merged cells or rows in the Grid and you want to maintain the same structure in the exported file.

To achieve this, you can utilize the [rowSpan](../../api/grid/querycellinfoeventargs/#rowspan) and [colSpan](../../api/grid/queryCellInfoEventArgs/#colspan) properties in the [queryCellInfo](../../api/grid/#querycellinfo) event of the Grid. This event allows you to define the span values for specific cells. Additionally, you can customize the appearance of the grid cells during the export using the [pdfQueryCellInfo](../../api/grid/#pdfquerycellinfo) event of the Grid.

The following example demonstrates how to perform export with cell and row spanning using `queryCellInfo` and `pdfQueryCellInfo` events of the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs207/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs207/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs207" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs207/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs207/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs207" %}
{% endif %}

## Exporting with custom date format

The exporting functionality in the Syncfusion ##Platform_Name## Grid allows you to export grid data, including custom date format. This feature is useful when you need to export grid data with customized date values. 

To apply a custom date format to grid columns during the export, you can utilize the [columns.format](../../api/grid/column/#format) property. This property allows you to define a custom format using format options.

The following example demonstrates how to export the grid data with custom date format. In this example, the formatOptions object is used as the `columns.format` property for the **OrderDate** column. This custom date format displays the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Thu, Jul 4, '96).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs208/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs208/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs208" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs208/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs208/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs208" %}
{% endif %}

## Exporting multiple grids

Exporting multiple grids in the Syncfusion ##Platform_Name## Grid component allows you to export different grids to compare them side by side in external applications on the same or different pages of a PDF file.  Each grid is identified by its unique ID. You can specify which grid to export by listing their **IDs** in the [exportGrids](../../api/grid/#exportgrids) property.

### Same page

PDF exporting provides support for exporting multiple grids on the same page. To export the grids on the same page, define [multipleExport.type](../../api/grid/multiplePdfExport/#type) as **AppendToPage** in [pdfExportProperties](../../api/grid/pdfExportProperties/#multipleexport). It also has an option to provide blank space between the grids. This blank space can be defined by using [multipleExport.blankSpace](../../api/grid/multiplePdfExport/#blankspace) property. 

The following example demonstrates how to export multiple grids to the same page in a PDF file when a toolbar item is clicked.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs209/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs209/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs209" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs209/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs209/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs209" %}
{% endif %}

### New page

PDF export functionality enables the exporting of multiple grids into separate pages (each grid on a new page) within the PDF file.

To achieve this, you can follow these steps:

1. Access the [pdfExportProperties](../../api/grid/pdfExportProperties/#multipleexport) of the Grid component.

2. Set the [multipleExport.type](../../api/grid/multiplePdfExport/#type) property to **NewPage**.

3. Trigger the PDF export operation.

The following example demonstrates how to export multiple grids to a PDF file when a toolbar item is clicked.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs210/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs210/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs210" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs210/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs210/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs210" %}
{% endif %}

### Limitations

* Multiple grids exporting feature is not supported with server side exporting.

## Exporting hierarchy grid

Exporting a hierarchy grid in the Syncfusion ##Platform_Name## Grid component allows you to generate a PDF document that includes the master grid along with its child grids. This feature is useful when you need to export hierarchical data with its related details.

To achieve this, you can customize the exporting behavior by using the `pdfExportProperties.hierarchyExportMode` property of the Grid.

The `hierarchyExportMode` property allows you to specify the exporting behavior for the hierarchy grid. The following options are available:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all child grids, expanded or not. |
| None     | Exports only the master grid without any child grids. |

The following example demonstrates how to export hierarchical grid to PDF document. Also change the `pdfExportProperties.hierarchyExportMode` property by using [value](../../api/drop-down-list#value) property of the `DropDownList` component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs211/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs211/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs211" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs211/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs211/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs211" %}
{% endif %}

## Remove header row while exporting

When exporting data from the Syncfusion ##Platform_Name## Grid, you have an option to remove the header row from the exported file. This can be useful when you want to export grid data without including the header values in the exported document.

To achieve this, you can utilize the [pdfHeaderQueryCellInfo](../../api/grid/#pdfheaderquerycellinfo) event of the Grid. This event allows you to customize the header cells during the PDF export process. By handling this event, you can remove the header row from the exported file by not providing any content and height for the header cells. This ensures that the exported file contains only the data rows without including the header information.

The following example demonstrates how to perform export without header using `pdfHeaderQueryCellInfo` event of the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs212/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs212/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs212" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs212/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs212/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs212" %}
{% endif %}

## See Also

* [How to Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)