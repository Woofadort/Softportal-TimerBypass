// ==UserScript==
// @name         Softportal Timer Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows you to immediately download the file bypass the timer. It can also help when the timer is broken
// @description:ru  Позволяет сразу скачать файл, не ожидая таймера. Также помогает когда таймер на сайте сломан
// @author       Woofadort
// @match        https://www.softportal.com/getsoft-*-1.html
// @run-at       document-start
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=softportal.com
// @homepageURL  https://github.com/Woofadort/Softportal-TimerBypass/
// @updateURL    https://raw.githubusercontent.com/Woofadort/Softportal-TimerBypass/refs/heads/main/bypass_ext.js
// @downloadURL  https://raw.githubusercontent.com/Woofadort/Softportal-TimerBypass/refs/heads/main/bypass_ext.js
// @supportURL   https://github.com/Woofadort/Softportal-TimerBypass/issues
// ==/UserScript==


(function() {
    'use strict';

    // A function that waits for Download() to appear and then calls it
    function waitAndBypass() {
        if (typeof Download === 'function') {
            try {
                // Call Download function directly
                Download();
                // Rester flag to prevent the download from starting again
                window.dload = 0;
                console.log('Bypass: Download() called and dload set to 0');
            } catch (e) {
                console.error('Bypass Error at call Download():', e);
            }
        } else {
            // If Download not defined, then we try again after 300 ms
            setTimeout(waitAndBypass, 300);
        }
    }

    // We start the waiting cycle immediately upon startup
    waitAndBypass();
})();
