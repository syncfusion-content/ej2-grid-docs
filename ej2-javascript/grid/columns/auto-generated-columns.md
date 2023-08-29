---
layout: post
title: Auto generated columns in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Auto generated columns in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto generated columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto generated columns in ##Platform_Name## Grid control

The [`columns`](../../api/grid/column) are automatically generated when [`columns`](../../api/grid/column) declaration is empty or undefined while initializing the grid. All the columns in the [`dataSource`](../../api/grid/#datasource) are bound as grid columns.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs2" %}
{% endif %}

> When columns are auto-generated, the column [`type`](../../api/grid/column/#type) will be determined from the first record of the [`dataSource`](../../api/grid/#datasource).

## Set isPrimaryKey for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](../../api/grid/column/#isprimarykey) column property as true by any one of the following two ways,

If Primary key "column index" is known then refer the following code example

```ts

import { Grid, Edit } from '@syncfusion/ej2-grids';

Grid.Inject(Edit);

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 3 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = () => {
    var column: Column = grid.columns[0];
    column.isPrimaryKey = 'true';
}

```

If Primary key "column fieldname" is known then refer the following code example

```ts

import { Grid, Edit } from '@syncfusion/ej2-grids';

Grid.Inject(Edit);

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = () => {
    var column: Column = grid.getColumnByField('OrderID');
    column.isPrimaryKey = 'true';
}

```

## Set column options to auto generated columns

You can set column options such as [`format`](../../api/grid/column/#format), [`width`](../../api/grid/column/#width) to the auto generated columns by using [`dataBound`](../../api/grid/#databound) event of the grid.

In the below example, [`width`](../../api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and **numeric** type is set for **Freight** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs3" %}
{% endif %}