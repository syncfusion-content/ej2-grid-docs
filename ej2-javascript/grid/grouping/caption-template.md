---javascript
layout: post
title: Caption template in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Caption template in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Caption template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Caption template in ##Platform_Name## Grid control

The caption template feature in the Syncfusion ##Platform_Name##  Grid allows you to customize and enhance the appearance of group caption row. It provides a flexible way to display additional information about grouped data, such as counts or grouped value, and enables you to incorporate custom content like images, icons, or other HTML elements. This feature empowers you to create visually appealing and informative group captions in the grid control.

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
        
{% previewsample "page.domainurl/code-snippet/grid/captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/captiontemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/captiontemplate-cs1" %}
{% endif %}

## Adding custom text in group caption

The Syncfusion ##Platform_Name##  Grid allows you to enhance the group captions by adding custom text, providing a more meaningful and informative representation of the grouped data. By utilizing the [captionTemplate](../../api/grid/groupSettings/#captiontemplate) property, you can add specific text or information to the group caption, offering flexibility in customization.

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
        
{% previewsample "page.domainurl/code-snippet/grid/customText-captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customText-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/customText-captiontemplate-cs1" %}
{% endif %}

## Customize group caption text using locale

The Syncfusion ##Platform_Name## Grid allows you to customize the group caption text based on the locale. This feature enables you to display localized text or translated content in the group captions according to different language or region settings.

To achieve this, you can utilize the `L10n` and `setCulture` methods from the `@syncfusion/ej2-base` package. The `L10n.load()` method is used to load the localized strings, where the grid object contains the specific translations for the group caption text and the `setCulture` method sets the active locale to **ar** culture to the Grid control.

The following example demonstrates, how to customize group caption text based on **"ar"** locale.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/captiontemplate-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/captiontemplate-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/captiontemplate-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/captiontemplate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/captiontemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/captiontemplate-cs2" %}
{% endif %}

## Render custom control in group caption

The Syncfusion ##Platform_Name## Grid offers the flexibility to render a custom control in the group caption, providing advanced or interactive functionality within the group caption row. This feature allows you to display custom UI elements, like buttons, icons, or dropdowns, and handle user interactions directly within the group caption. 

To render custom control in the group caption, you can utilize the [captionTemplate](../../api/grid/groupSettings/#captiontemplate) property. This feature enables you to replace plain text with a custom control in the group caption, enhancing customization and interactivity.

The following example demonstrates how to add a custom control to the group caption using the `captionTemplate` property. In the template, the [Chips](../../chips/getting-started) control is utilized, with the text content set as the group key.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/customComponent-captiontemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customComponent-captiontemplate-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/customComponent-captiontemplate-cs1" %}
{% endif %}