---
layout: post
title: Paging in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Paging in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Paging 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Paging in ##Platform_Name## Grid component

Paging provides an option to display grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets. 

To enable paging, you need to set the [allowPaging](../../api/grid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the grid. When paging is enabled, a pager component rendered at the bottom of the grid, allowing you to navigate through different pages of data.

To use paging, you need to inject the **PageService** into the provider section of your **AppModule**. This service provides the necessary methods and events to handle paging functionality.

Paging options can be configured through the [pageSettings](../../api/grid/pageSettings) property. The `pageSettings` object allows you to control various aspects of paging, such as the page size, current page, and total number of records.

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Customize the pager options 

Customizing the pager options in the Syncfusion Grid allows you to tailor the pagination control according to your specific requirements. You can customize the pager to display the number of pages using the `pageCount` property, change the current page using `currentPage` property, display the number of records in the grid using the `pageSize` property, and even adjust the page sizes in a dropdown using the `pageSizes` property. Additionally, you can include the current page as a query string in the URL for convenient navigation. 

### Change the page size 

The Syncfusion Grid allows you to control the number of records displayed per page, providing you with flexibility in managing your data. This feature is particularly useful when you want to adjust the amount of data visible to you at any given time. To achieve this, you can utilize the [pageSettings.pageSize](../../api/grid/pageSettings/#pagesize) property. This property is used to specify the initial number of records to display on each page. The default value of `pageSize` property is **12**.

The following example demonstrates how to change the page size of a Grid using an external button click based on **TextBox** input.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs134/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs134/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs134" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs134/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs134/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs134" %}
{% endif %}

### Change the page count 

The Syncfusion Grid allows you to adjust the number of pages displayed in the pager container. This is useful when you want to manage the number of pages you see while navigating through extensive datasets. The default value of `pageCount` property is **8**.

To change the page count in the Syncfusion Grid, you can utilize the [pageSettings.pageCount](../../api/grid/pageSettings/#pagecount) property, which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a Grid using an external button click based on **TextBox** input.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs135/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs135/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs135" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs135/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs135/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs135" %}
{% endif %}


## Template

You can use custom elements inside the pager instead of default elements. The custom elements can be defined by using the [`template`](../api/grid/pageSettings/#template) property. Inside this template, you can access the [`CurrentPage`](../api/grid/pageSettings/#currentpage), [`pageSize`](../api/grid/pageSettings/#pagesize), [`pageCount`](../api/grid/pageSettings/#pagecount), `totalPage` and `totalRecordCount` values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/pager-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/pager-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pager-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/pager-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/pager-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/pager-template-cs1" %}
{% endif %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the Grid dynamically. It can be enabled by defining the `pageSettings.pageSizes` property as true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs135/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs135/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs135" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs135/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs135/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs135" %}
{% endif %}

## How to render Pager at the Top of the Grid

By default, Pager will be rendered at the bottom of the Grid. You can also render the Pager at the top of the Grid by using the `dataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs136/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs136/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs136" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs136/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs136/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs136" %}
{% endif %}

> During the paging action, the pager component triggers the below three events.
> * The `created` event triggers when Pager is created.
> * The `click` event triggers when the numeric items in the pager is clicked.
> * The `dropDownChanged` event triggers when pageSize DropDownList value is selected.

## See Also

* [Group with Paging](./grouping/grouping/#group-with-paging)
