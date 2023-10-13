---
layout: post
title: Foreign key column in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Foreign key column in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Foreign key column 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Foreign key column in ##Platform_Name## Grid control

The Foreign key column in the Syncfusion Grid component allows you to display related data from a foreign key data source in a column within the grid. This feature is particularly useful when you have a column in the grid that represents a foreign key relationship with another data source.

To enable and integrate the foreign key column in the ##Platform_Name## Grid component, follow these steps:

 1.Inject the ForeignKeyService in the Grid

 ```typescript
 ej.grids.Grid.Inject(ej.grids.ForeignKey);
```

2.Define the foreign key column in the grid using the following properties:

* [dataSource](../../api/grid/column/#datasource): Specifies the foreign data source that  contains the related data.

* [foreignKeyField](../../api/grid/column/#foreignkeyfield): Maps the column name in the grid to the field in the foreign data source that represents the foreign key relationship.

* [foreignKeyValue](../../api/grid/column/#foreignkeyvalue): Specifies the field from the foreign data source that should be displayed in the grid as the related data.

```typescript

{field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData}
                
```

>The `foreignKeyField` property should match the name of the field in the foreign data source that represents the foreign key relationship, and the `foreignKeyValue` property should specify the field from the foreign data source that should be displayed in the grid as the related data.

## Binding local data

The Syncfusion Grid component provides a convenient way to bind local data to a foreign key column. This allows you to display related data from a local data source within the grid. Here's an example of how to bind local data to a Foreign Key column in Syncfusion Grid:

In this example, **data** is the local data source for the Grid, and **employeeData** is the local data source for the foreign key column. The `field` property of the column is set to **EmployeeID** which represents the foreign key value in the **data**. The `foreignKeyValue` property is set to **FirstName** which represents the field name in the **employeeData** that you want to display in the foreign key column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs1" %}
{% endif %}

## Binding remote data

The Foreign key column in Syncfusion Grid allows you to bind remote data for a foreign key column. You can assign the service data as an instance of `DataManager` to the `dataSource` property, and provide the endpoint `URL` as the data source URL.

This example demonstrates how to use the foreign key column with remote data binding using the [ODataV4Adaptor](../../grid/data-binding/remote-data#odata-v4-adaptor---binding-odata-v4-service) in the grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs1remote/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs1remote/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs1remote" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs1remote/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs1remote/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs1remote" %}
{% endif %}

> * For remote data, the sorting and grouping is done based on [column.foreignKeyField](../../api/grid/column/#foreignkeyfield) instead of [column.foreignKeyValue](../../api/grid/column/#foreignkeyvalue).
> * If [column.foreignKeyField](../../api/grid/column/#foreignkeyfield) is not defined, then the column uses [column.field](../../api/grid/column/#field).

## Use edit template in foreignkey column

The Syncfusion Grid provides support for using an edit template in a foreign key column. By default, a dropdown component is used for editing foreign key column. However, you can render a different component for editing by using the [column.edit](../../api/grid/column/#edit) property. Here's an example that demonstrates how to use an edit template in a foreign key column:

In this example, an [AutoComplete](../../auto-complete/default) component is rendered as the edit template for the **"EmployeeID"** foreign key column. The [dataSource](../../api/auto-complete/#datasource) property of the AutoComplete component is set to the employees data, and the fields property is configured to display the **"FirstName"** field as the value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs2" %}
{% endif %}

## Customize filter UI in foreignkey column

The Syncfusion Grid allows you to customize the filtering user interface (UI) for foreign key columns by using the [column.filter](../../api/grid/column/#filter) property. By default, a dropdown component is used for filtering foreign key columns. However, you can create your own custom filtering UI by specifying a template function for the `column.filter` property. Here's an example that demonstrates how to create a custom filtering UI in a foreign key column:

In this example, a [DropDownList](../../drop-down-list/default.html) component is rendered as the filter UI for the **"EmployeeID"** foreign key column. The [dataSource](../../api/drop-down-list#datasource) property of the DropDownList component is set to the employees data, and the fields property is configured to display the **FirstName** field as the [text](../../api/drop-down-list#text) and **EmployeeID** field as the [value](../../api/drop-down-list#value). The `value` property is set to the current filter value of the column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs3" %}
{% endif %}

## Use filter bar template in foreignkey column

You can use the filter bar template in a foreign key column in Grid by defining the [column.filterBarTemplate](../../api/grid/column/#filterbartemplate) property. This allows you to customize the filter bar for the foreign key column with a custom component or HTML template. Here's an example that demonstrates how to use a filter bar template in a foreign key column:

In this example, the **"EmployeeID"** column is a foreign key column, and the **filter** function is used as the filter bar template for this column. The `filter` function can be defined in your component code and should return the desired component or HTML template for the filter bar. The column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs4" %}
{% endif %}

## Perform aggregation in foreignkey column

By default, aggregations are not supported in a foreign key column in the Syncfusion Grid. However, you can achieve aggregation for a foreign key column by using [customAggregate](../../api/grid/aggregateColumnDirective/#customaggregate).

To perform aggregation in a foreign key column, follow these steps:

1.Define a foreign key column in the Grid.
2.Implement a custom aggregate function to calculate the aggregation for the foreign key column.
3.Set the [customAggregate](../../api/grid/aggregateColumnDirective/#customaggregate) property of the column to the custom aggregate function.

Here's an example that demonstrates how to perform aggregation in a foreign key column:

In the provided example, the `customAggregateFn` function is used to filter the data based on the **FirstName** field of the foreign key column, using the `getForeignData` internal function. The function then counts the occurrences of **Margaret**. The result is displayed in the grid's footer template using the `footerTemplate`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs5" %}
{% endif %}

## Enable multiple foreign key columns

The Syncfusion Grid component supports the feature of enabling multiple foreign key columns with editing options. This allows users to display columns from foreign data sources in the Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs6" %}
{% endif %}