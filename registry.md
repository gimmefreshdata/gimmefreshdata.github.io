---
layout: default
title: Archive Registry
---
_This page is under development_

Fresh Data uses the following archives:

source | type | date | url  
 :--- | :--- | :--- | :--- 
 {% for source in site.data.sources %}[{{ source.name }}]({{ source.url }}) | _{{ source.archive_type }}_ | {{ source.archive_date }} | {{ source.archive_url }}
 {% endfor %}

<br/>
[Edit Registry](https://github.com/gimmefreshdata/gimmefreshdata.github.io/blob/master/_data/sources.csv)
