---
title: Wa
subtitle: Wa
author: admin
published: true
layout: doc
---
<ul class="uk-nav uk-nav-default doc-nav">
{% for menu in site.docs %}
    {% assign doc_url = menu.url %}
    {% assign p = site.docs | where:"url", doc_url | first %}
    <li class="{% if doc_url == page.url %}uk-active{% endif %}">
        <a href="{{ menu.url | relative_url}}">{{menu.title}}</a>
    </li>
{% endfor %}
</ul>