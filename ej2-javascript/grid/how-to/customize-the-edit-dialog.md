---
layout: post
title: Customize the edit dialog in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Customize the edit dialog in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the edit dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the edit dialog in ##Platform_Name## Grid control

You can customize the appearance of the edit dialog in the [`actionComplete`](../../api/grid/#actioncomplete) event based on `requestType` as `beginEdit` or `add`.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the `Save` and `Cancel` buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local) list for more localization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/customizedialog-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customizedialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customizedialog-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customizedialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs2" %}
{% endif %}
