// ==UserScript==
// @name         KPI and Alert Management - Update KPI
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
const intTime = 1000;

    const arrElements =  [
        'eui-container', 'eui-container-layout-holder', '#LayoutHolder', 'eui-app-content',
        'e-kpi-management', 'div.border-style', 'e-cnom-kpi-definition'
    ]


    const drawerR = [...arrElements, 'e-cnom-create-kpi', 'eui-layout-v0-flyout-panel'];

    const dataTable = [...arrElements, 'e-cnom-lib-table'];

    esim.rendered(
        [...dataTable, 'eui-base-v0-text-field'],
        (filter) => esim.typing(filter, 'Test'),
      intTime
    );

    const tableIndex0 = [...dataTable,

                         'e-cnom-internal-extended-table', 'tr[tabindex="-1"][data-index="0"]',
                        ]

    esim.rendered(tableIndex0, (tableIndex0) => tableIndex0.click(), intTime)
        .then(
            () => {
                esim.rendered(
                    [...arrElements, 'eui-base-v0-button:not([class])'],
                    (btnEditKpi) =>btnEditKpi.click(), intTime
                );

                esim.rendered(
                    drawerR,
                    (drawerR) => {
                        let formular = esim.find('#formula', drawerR);
                        formular.value = 'Test';

                        let btnApply = esim.find('eui-base-v0-button.kpi-apply-button',drawerR);
                        btnApply.click();
                    });

                esim.rendered(
                    [...arrElements, 'e-cnom-create-kpi',  '#counter-confirm'],
                    (confirmBox) => {
                        let btnApply = esim.find('eui-base-v0-button[slot="bottom"][primary]', confirmBox);
                        btnApply.click();
                    });

      });


})();
