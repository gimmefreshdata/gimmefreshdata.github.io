---
layout: default
title: Archives
permalink: "archives.html"
---
_This page is under development_

Fresh Data uses the following archives:

source | format | date | url | update interval [cron](https://en.wikipedia.org/wiki/Cron)
 :--- | :--- | :--- | :--- 
 {% for source in site.data.sources %}[{{ source.name }}]({{ source.url }}) | _{{ source.archive_format }}_ | {{ source.archive_date }} | [link]({{ source.archive_url }} "download source archive") | {{ source.cron }}
 {% endfor %}

<br/>
[Edit Registry](https://github.com/gimmefreshdata/gimmefreshdata.github.io/blob/master/_data/sources.csv)
