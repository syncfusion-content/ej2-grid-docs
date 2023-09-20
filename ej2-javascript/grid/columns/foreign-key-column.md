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

Foreign key column can be enabled by using [`column.dataSource`](../../api/grid/column/#datasource), [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../../api/grid/column/#datasource): Specifies the foreign data source that  contains the related data.

* [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield): Specifies the field from the foreign data source that should be displayed in the grid as the related data.

* [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue): Specifies the field from the foreign data source that should be displayed in the grid as the related data.

```html

field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData
                
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

> * If [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../../api/grid/column/#field).

## Binding remote data

The Foreign key column in Syncfusion Grid allows you to bind remote data for a foreign key column. You can assign the service data as an instance of `DataManager` to the `dataSource` property, and provide the endpoint `URL` as the data source URL.

This example demonstrates how to use the foreign key column with remote data binding using the [ODataV4Adaptor](https://ej2.syncfusion.com/javascript/documentation/grid/data-binding/remote-data#odata-v4-adaptor---binding-odata-v4-service) in the grid:

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



Foreign key column can be enabled by using [`column.dataSource`](../../api/grid/column/#datasource), [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../../api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

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

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue).

## Use edit template in foreignkey column

BThe Syncfusion Grid provides support for using an edit template in a foreign key column. By default, a dropdown component is used for editing foreign key column. However, you can render a different component for editing by using the [column.edit](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#edit) property. Here's an example that demonstrates how to use an edit template in a foreign key column:

In this example, an [AutoComplete](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/auto-complete/default) component is rendered as the edit template for the **"EmployeeID"** foreign key column. The [dataSource](../../api/auto-complete/#datasource) property of the AutoComplete component is set to the employees data, and the fields property is configured to display the **"FirstName"** field as the value.

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

You can create your own filtering UI by using [`column.filter`](../../api/grid/column/#filter) property. The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The `Employee Name` is a foreign key column. DropDownList is rendered using Filter UI.

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

You can use the filter bar template in foreign key column by defining the [`column.filterBarTemplate`](../../api/grid/column/#filterbartemplate) property. The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The `Employee Name` is a foreign key column. This column header shows the custom filter bar template and you can select filter value by using the `DropDown` options.

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

Default aggregations are not supported in a foreign key column. You can achieve aggregation for the foreign key column by using the custom aggregates. The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The `Employee Name` is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

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

Multiple foreign key columns with editing options are enabled for the JavaScript(ES5) Grid component.

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