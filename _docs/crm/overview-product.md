---
tags:
- CRM
- Overview Produk
title: CRM HelpDesk Page
path: crm
subtitle: Mengenal CRM Qontak
author: admin
menu:
  navigation_docs:
    title: Call Center
    docs:
    - crm/overview-product
    weight: 2
    identifier: item_7eNUR7P
    parent: item_dYZuS8D

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