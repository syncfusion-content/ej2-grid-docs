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
> * If [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../../api/grid/column/#field).

## Use edit template in foreignkey column

By default, the foreign key column uses the drop-down component for editing. You can render other than the drop-down component by using the [`column.edit`](../../api/grid/column/#edit) property. The following example demonstrates the way of using edit template in the foreign column.

In the following code example, the `Employee Name` is a foreign key column. When editing, the AutoComplete component is rendered instead of drop-down list.

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