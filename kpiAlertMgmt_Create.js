// ==UserScript==
// @name         KPI and Alert Management - Create KPI
// @namespace    http://tampermonkey.net/
// @version      1.35
// @description  try to take over the world!
// @author       You
// @include      *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @require      https://raw.githubusercontent.com/yiluncienet/front_end_test/master/esim.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    //esim.start();

    const arrElements =  [
        'eui-container', 'eui-container-layout-holder', '#LayoutHolder', 'eui-app-content',
        'e-kpi-management', 'div.border-style', 'e-cnom-kpi-definition'
    ]


    esim.rendered(
      [...arrElements, 'eui-base-v0-button.create-button-style'],
      (btnCreateKpi) => btnCreateKpi.click()
    );

    const drawerR = [...arrElements, 'e-cnom-create-kpi', 'eui-layout-v0-flyout-panel'];

   esim.rendered(
        drawerR,
        (drawerR) => {
            let kpiName = esim.find('#kpiName', drawerR);
            kpiName.click();
            kpiName.value = 'Test';

            let formular = esim.find('#formula', drawerR);
            formular.value = 'CPULoad.IOWait';

            let btnApply = esim.find('eui-base-v0-button.kpi-apply-button',drawerR)
            btnApply.click()


    });


})();