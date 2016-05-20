---
layout: default
title: Archives
---
_This page is under development_

Fresh Data uses the following archives:

source | format | date | url | [md5](https://en.wikipedia.org/wiki/MD5 "uniquely identifies archive content")  
 :--- | :--- | :--- | :--- 
 {% for source in site.data.sources %}[{{ source.name }}]({{ source.url }}) | _{{ source.archive_format }}_ | {{ source.archive_date }} | [link]({{ source.archive_url }} "download source archive") | {{ source.archive_md5 }}
 {% endfor %}

<br/>
[Edit Registry](https://github.com/gimmefreshdata/gimmefreshdata.github.io/blob/master/_data/sources.csv)
