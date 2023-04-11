---
layout: post
title: Prevent to persist in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Prevent to persist in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent to persist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent to persist in ##Platform_Name## Grid control

## Prevent columns from persisting

When the [enablePersistence](../../api/grid/#enablepersistence) property is set to true, the Grid properties such as [Grouping](../../api/grid/groupSettingsModel/), [Paging](../../api/grid/pageSettingsModel/), [Filtering](../../api/grid/pageSettingsModel/), [Sorting](../../api/grid/sortSettingsModel/), and [Columns](../../api/grid/columnModel/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](../../api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>Note: When the `enablePersistence` property is set to true, the Grid features such as column template, column formatter, header text, and value accessor will not persist.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-prevent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-prevent-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-prevent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-prevent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-prevent-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-prevent-cs1" %}
{% endif %}