// ==UserScript==
// @name         login_sec_admin
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://localhost:8233/login.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @require      https://raw.githubusercontent.com/yiluncienet/front_end_test/master/esim.js
// @homepageURL  https://github.com/yiluncienet/front_end_test
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     esim.start();
     esim.input('#username','sec_admin');
     esim.input('#password','AdminAdmin123!');
     esim.click('#button');
})();