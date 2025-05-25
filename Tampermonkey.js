// ==UserScript==
// @name         Prompt
// @namespace    https://github.com/LegendSquare
// @version      1.2
// @description  Null
// @match        *://*.roblox.com/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/LegendSquare/Generator/main/Prompt.js',
        onload: function(response) {
            const script = document.createElement('script');
            script.textContent = response.responseText;
            document.body.appendChild(script);
        },
        onerror: function(err) {
            console.error("Error", err);
        }
    });
})();
