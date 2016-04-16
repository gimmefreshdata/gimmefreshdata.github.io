---
layout: default
title: Active Searches
---
List of requested, active searches in no particular order.

<table id='monitors'>
  <thead>
    <tr>
      <th>status</th>
      <th>#records</th>
      <th>taxa</th>
      <th></th>
    </tr>
  </thead>
</table>

<script>
var init = function() {
  var req = xhr();
  if (req !== undefined) {
    req.open('GET', 'http://apihack-c18.idigbio.org/monitors', true);
    req.onreadystatechange = function () { 
      if (req.readyState === 4) {
        if (req.status === 200) {
          var resp = JSON.parse(req.responseText);
          if (Array.isArray(resp)) {
            resp.forEach(function(monitor) {
              var tr = document.createElement('tr');
              var td = document.createElement('td');
              var elem = document.createElement('td');
              elem.textContent = monitor['status'];
              tr.appendChild(elem);
              elem = document.createElement('td');
              elem.textContent = monitor['recordCount'];
              tr.appendChild(elem);
              elem = document.createElement('td');
              elem.textContent = monitor.selector['taxonSelector'];
              tr.appendChild(elem);
              var link = document.createElement('a');
              var queryStrings = ['taxonSelector', 'traitSelector', 'wktString'].map(function(selector) {
                  return selector + '=' + encodeURIComponent(monitor.selector[selector].replace(/\|/g,','));
              });
             
              var query = '/?' + queryStrings.join('&');
              link.setAttribute('href', query);
              link.setAttribute('target', '_blank');
              link.textContent = 'view';
              td.appendChild(link);
              tr.appendChild(td);
              document.getElementById('monitors').appendChild(tr);
            });
          }
        }
      }
    };
    req.send(null);
  }
};

var xhr = function () {
    var req = null;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        req = new XMLHttpRequest();
    } else if ((typeof window !== 'undefined') && window.ActiveXObject) { //     IE
        try {
            req = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                req = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
            }
        }
    }
    return req;
};

window.addEventListener('load', function () {
  init();
});
</script>
