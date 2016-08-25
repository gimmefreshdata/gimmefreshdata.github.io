var getBaseUrl = function() {
  return 'http://api.effechecka.org';
}

var createMonitorElem = function(monitorSelector, queryBaseUrl, label) {
    var link = document.createElement('a');
    var queryStrings = ['taxonSelector', 'traitSelector', 'wktString'].map(function(selector) {
        return selector + '=' + encodeURIComponent(monitorSelector[selector].replace(/\|/g,','));
    });

    var query = queryBaseUrl + '?' + queryStrings.join('&');
    link.setAttribute('href', query);
    link.setAttribute('target', '_blank');
    link.textContent = label;
    var td = document.createElement('td');
    td.appendChild(link);
    return td;
};

var removeElements = function(cssSelector) {
    var nodes = document.querySelectorAll(cssSelector);
    for (var index = 0; index < nodes.length; index++) {
        nodes[index].parentNode.removeChild(nodes[index]);
    }
};

var httpGet = function (url, callback) {
    var req = xhr();
    if (req !== undefined) {
        req.open('GET', url, true);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    callback(req.responseText);
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
