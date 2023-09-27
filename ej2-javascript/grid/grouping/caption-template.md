---
layout: post
title: Caption template in javascript Grid control | Syncfusion
description: Learn here all about Caption template in Syncfusion javascript Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Caption template 
publishingplatform: javascript
documentation: ug
domainurl: ##DomainURL##
---

# Caption template in javascript Grid component

The caption template feature in the Syncfusion javascript Grid allows you to customize and enhance the appearance of group caption row. It provides a flexible way to display additional information about grouped data, such as counts or grouped value, and enables you to incorporate custom content like images, icons, or other HTML elements. This feature empowers you to create visually appealing and informative group captions in the grid component.

To achieve this customization, you can utilize the [captionTemplate](../../api/grid/groupSettings/#captiontemplate) property. By accessing the `data` parameter, which represents the currently displayed group, you can incorporate its properties such as `field` (column's field name), `headerText` (column's header text), `key`(grouped value) and `count` (count of the grouped records) into the caption template.

The following example demonstrates how to customize the group header caption in the Grid by utilizing  the `captionTemplate` property. It displays the **headerText**, **key** and **count** of the grouped columns.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/captiontemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/captiontemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/captiontemplate-cs1" %}
{% endif %}

## Adding custom text in group caption

The Syncfusion javascript Grid allows you to enhance the group captions by adding custom text, providing a more meaningful and informative representation of the grouped data. By utilizing the [captionTemplate](../../api/grid/groupSettings/#captiontemplate) property, you can add specific text or information to the group caption, offering flexibility in customization.

The following example demonstrates how to add a custom text to the group caption using the `captionTemplate` property. The data parameter is utilized to display the  **key**, **count** and **headerText** of the grouped columns along with the custom text. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/customText-captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/customText-captiontemplate-cs1" %}
{% endif %}

## Render custom component in group caption

We can render custom components in the group caption by using the [`groupSettings.captionTemplate`](../../api/grid/column/#captionTemplate) property.

In the below demo, we have rendered the EJ2 [`ButtonComponent`](../../button/getting-started/) in the group caption.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/customComponent-captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/customComponent-captiontemplate-cs1" %}
{% endif %}