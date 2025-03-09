// ==UserScript==
// @name         APG Chesapeake Paywall Remover
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  APG Chesapeake Paywall Remover
// @author       Jonathan Andres
// @match        http*://*.stardem.com/*
// @match        http*://*.cecildaily.com/*
// @match        http*://*.dcmilitary.com/*
// @match        http*://*.dundalkeagle.com/*
// @match        http*://*.myeasternshoremd.com/*
// @match        http*://*.newarkpostonline.com/*
// @match        http*://*.somdnews.com/*
// @match        http*://*.avenuenews.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // TODO: avenuenews.com is "encrypted"
    // TODO: newarkpostonline is "encrypted"
    // TODO: dcmilitary.com is "encrypted"

    function showSubscriberOnly() {
        // Make paragraphs not hidden
        var nodes = document.getElementsByClassName('subscriber-only');
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].style = "";
        }
    }

    function showAssetContent() {
        var assetContent = document.getElementById('asset-content');

        if (assetContent.hidden) {
            assetContent.hidden = false;
        }
        else {
            setTimeout(showAssetContent, 50);
        }
    }

    showSubscriberOnly();
    showAssetContent();

    // Override the TNCMS object to prevent subscription modal popups
    TNCMS = null;
})();