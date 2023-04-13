---
layout: post
title: Local data in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Local data in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Local data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Local data in ##Platform_Name## Grid control

To bind local data to the grid, you can assign a JavaScript object array to the [`dataSource`](../../api/grid/#datasource) property. The local data source can also be provided as an instance of the [`DataManager`](../../data).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs11" %}
{% endif %}

> By default, [`DataManager`](../../data) uses **JsonAdaptor** for local data-binding.

## Refresh the data source

You can add/delete the data source records through an external button. To reflect the data source changes in the grid, invoke the [`refresh`](../../api/grid/#refresh) method.

To refresh the data source:

**Step 1**:

Add/delete the data source record by using the following code.

   ```ts
       grid.dataSource.unshift(data); // add a new record.

       grid.dataSource.splice(selectedRow, 1); // delete a record.

   ```

**Step 2**:

Refresh the grid after the data source change by using the [`refresh`](../../api/grid/#refresh) method.

```ts
    grid.refresh(); // refresh the Grid.

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/refresh-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/refresh-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/refresh-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/refresh-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/refresh-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/refresh-grid-cs1" %}
{% endif %}