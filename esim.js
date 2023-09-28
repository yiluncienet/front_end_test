// esim.js
var esim = (function() {
    
    
    function start() {
        alert('Attention! The script will start');
    }

    function input(strElement, strValue, currentElement = document){
        let input = currentElement.querySelector(strElement);
        input.value = strValue
    }

    function eclick(strElement, currentElement = document){
        let clickableItem = currentElement.querySelector(strElement);
        clickableItem.click();
    }

    function nav(strurl){
        window.location.href = strurl;
    }

    function navigate(strurl){
        window.location.href = strurl   ;
    }

    function find(element, currentElement = document){
        let elementAfterQuery = currentElement.querySelector(element);
        return elementAfterQuery;
    }

    function deepfind(selector, currentElement = document) {

        let parts = selector;

        if (typeof selector === "string") {
            parts = parts.split('>');
        } 

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


    function didrender(selectorsArray, actionFunction, intervalTime = 5000) {
        const interval = setInterval(() => {
            const targetElement = deepfind(selectorsArray);
            
            if (targetElement) {
                actionFunction(targetElement);
                clearInterval(interval);
            }
        }, intervalTime);
    }


    function end() {
        alert('Attention! The script done');
    }

    return {
        start: start,
        input: input,
        eclick: eclick,
        navigate: navigate,
        nav: nav,
        find: find,
        deepfind: deepfind,
        didrender: didrender,
        end: end,
    };
})();
