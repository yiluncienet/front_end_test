// esim.js
var esim = (function() {
    
    
    function start() {
        alert('Attention! The script will start');
    }

    function input(strElement, strValue){
        let input = document.querySelector(strElement);
        input.value = strValue
    }

    function eclick(strElement){
        let clickableItem = document.querySelector(strElement);
        clickableItem.click();
    }

    function nav(strurl){
        window.location.href = strurl;
    }

    function navigate(strurl){
        window.location.href = strurl   ;
    }


    function deepfind(selector) {

        let parts;

        if (typeof selector === "string") {
            parts = selector.split('>');
        } else {
            parts = selector;
        }

        let currentElement = document;
        for (let i = 0; i < parts.length; i++) {
            if (currentElement.shadowRoot) {
                currentElement = currentElement.shadowRoot.querySelector(parts[i].trim());
            } else {
                currentElement = currentElement.querySelector(parts[i].trim());
            }
            if (!currentElement) {
                return null; // 如果中间的某个元素没有找到，返回null
            }
        }
        return currentElement;
    };




    function end() {
        alert('Attention! The script done');
    }

    return {
        start: start,
        input: input,
        eclick: eclick,
        navigate: navigate,
        nav: nav,
        deepfind: deepfind,
        end: end,
    };
})();
