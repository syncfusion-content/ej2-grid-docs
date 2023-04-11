---
layout: post
title: Render image in drop down list in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Render image in drop down list in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render image in drop down list 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render image in drop down list in ##Platform_Name## Grid control

To display an image in the DropDownList editor component, you can utilize the `itemTemplate` property. This property allows you to customize the content of each item in the dropdown list.

The below example shows how to use the itemTemplate property in the DropDownList editor component to display an image in the dropdown list. Here, we render the image for each item in the dropdown list of the foreign key column `Employee Name`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs112/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs112/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs112" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs112/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs112/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs112" %}
{% endif %}