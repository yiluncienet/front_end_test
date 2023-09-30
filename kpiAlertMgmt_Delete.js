// ==UserScript==
// @name         KPI and Alert Management - Delete KPI
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

                const dropDown = [...arrElements, 'e-cnom-lib-actions-dropdown', 'eui-base-v0-dropdown'];

                esim.rendered(
                    [...dropDown, 'eui-base-v0-button'],
                    (btnMoreActions) => btnMoreActions.click(), intTime
                );

                esim.rendered(
                    [...dropDown, 'eui-base-v0-menu-item:nth-child(3)'],
                    (btnDelete) => btnDelete.click(), intTime
                );

                esim.rendered(
                    [...arrElements, '#delete-confirm-dialog > eui-base-v0-button'],
                    (btnConfirmDelete) => btnConfirmDelete.click(), intTime
                );


      });


})();
