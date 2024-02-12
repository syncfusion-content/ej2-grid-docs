---
layout: post
title: Pdf export options in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Pdf export options in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pdf export options 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pdf Export Options in ##Platform_Name## Grid control

The Syncfusion ##Platform_Name## Grid control allows you to customize the PDF export options functionality. This flexibility enables you to have greater control over the exported content and layout to meet your specific requirements.

The PDF export action can be customized based on your requirements using the [pdfExportProperties](../../api/grid/pdfExportProperties) property. By using the `pdfExportProperties` property, you can export the current page records, selected records, or filtered records. Additionally, you can customize the page alignments using the `pdfExportProperties` property.

## Export current page records

Exporting the current page in Syncfusion ##Platform_Name## Grid to a PDF document provides the ability to export the currently displayed page records. This feature allows for generating PDF documents that specifically include the content from the current page of the grid.

To export the current page of the grid to a PDF document, you need to specify the [exportType](../../api/grid/pdfExportProperties/#exporttype) property as **CurrentPage**.

The following example demonstrates how to export current page to a PDF document when a toolbar item is clicked.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs141/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs141/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs141" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs141/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs141/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs141" %}
{% endif %}

## Export selected records

Exporting only the selected records from the Syncfusion ##Platform_Name## Grid allows generating PDF document that include only the desired data from the Grid. This feature provides the flexibility to export specific records that are relevant to the needs, enabling more focused and targeted PDF exports.

To export only the selected records by utilizing the [exportProperties->dataSource](../../api/grid/pdfExportProperties/#datasource) property in the [toolbarClick](../../api/grid/#toolbarclick) event. 

To export the selected records from the grid to a PDF file, you can follow these steps:

1. Handle the `toolbarClick` event of the Grid.

2. Retrieve the selected records using the [getSelectedRecords](../../api/grid/#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource `property.

4. Trigger the export operation using the [pdfExport](../../api/grid/#pdfexport) method.

The following example demonstrates how to export the selected records to a PDF document.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs142/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs142/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs142" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs142/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs142/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs142" %}
{% endif %}

## Export filtered records

Exporting only the filtered records from the Syncfusion ##Platform_Name## Grid allows you to generate PDF document that include only the data that matches your applied filters. This feature is useful when you want to export a subset of data based on specific criteria.

This can be achieved by defining the filtered data in the [exportProperties->dataSource](../../api/grid/excelExportProperties/#datasource) property before initiating the export.

To export only the filtered data from the grid to a PDF file, you can follow these steps:

1. Apply the desired filter to the grid data.

2. Get the filtered data using the [getFilteredRecords](../../api/grid/#getfilteredrecords) method.

3. Assign the filtered data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [pdfExport](../../api/grid/#pdfexport) method.

The following example demonstrates how to export the filtered records to a PDF document.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/exporting-filtered-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/exporting-filtered-data-cs2" %}
{% endif %}

## Export with hidden columns

Exporting hidden columns in the Syncfusion ##Platform_Name## Grid allows you to include hidden columns in the exported PDF document. This feature is useful when you have columns that are hidden in the UI but still need to be included in the exported document.

To export hidden columns of the grid to a PDF file, you need to set the [includeHiddenColumn](../../api/grid/pdfExportProperties/#includehiddencolumn) property as **true** in the [pdfExportProperties](../../api/grid/pdfExportProperties) property.

The following example demonstrates how to export hidden columns to a PDF file. In this example, the **ShipCity** column, which is not visible in the UI, is exported to the PDF document. You can also export the grid by changing the `pdfExportProperties.includeHiddenColumn` property based on the switch toggle using the [checked](../../api/switch/#checked) property of the [EJ2 Toggle Switch Button](../../switch/getting-started) component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs143/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs143/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs143" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs143/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs143/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs143" %}
{% endif %}

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](../../api/grid/#toolbarclick) and [`pdfExportComplete`](../../api/grid/#pdfexportcomplete) events.

In the `toolbarClick` event, based on `args.item.id` as `Grid_pdfexport`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `CustomerID` as a hidden column in the grid. While exporting, we have changed `CustomerID` to visible column and `ShipCity` as hidden column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs144/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs144/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs144" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs144/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs144/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs144" %}
{% endif %}

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the `exportProperties`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs145/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs145/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs145" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs145/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs145/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs145" %}
{% endif %}

## Change page size

Page size can be customized for the exported document using the `exportProperties`.
Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs146/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs146/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs146" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs146/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs146/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs146" %}
{% endif %}

## Define file name

You can assign the file name for the exported document by defining `fileName` property in [`PdfExportProperties`](../../api/grid/pdfExportProperties).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs147/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs147/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs147" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs147/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs147/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs147" %}
{% endif %}

## Font customization

### Default fonts

By default, grid uses `Helvetica` font in the exported document. You can change the default font by using `pdfExportProperties.theme` property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```ts

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    let pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
            caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using `pdfExportProperties.theme` property.

In the following example, we have used Advent Pro font to export the grid with Hungarian fonts.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/gridcustomfont-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/gridcustomfont-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/gridcustomfont-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/gridcustomfont-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/gridcustomfont-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/gridcustomfont-cs1" %}
{% endif %}

> `PdfTrueTypeFont` accepts base 64 format of the Custom Font.

## Export grid as blob

The Grid offers an option to export the data as a `Blob` instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to **true** in the [pdfExport](../../api/grid/#pdfexport) method. The grid returns the promise of a blob in the [pdfExportComplete](../../api/grid/#pdfexportcomplete) event.

The following example demonstrates how to obtain the blob data of the exported grid by executing the promise in the `pdfExportComplete` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/export-grid-as-blob-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-grid-as-blob-cs1" %}
{% endif %}
