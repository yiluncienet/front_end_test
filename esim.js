// esim.js
var esim = (function() {
    
    
    function start() {
        alert('Attention! The script will start');
    }

    function input(strElement, strValue, currentElement = document){
        let input = currentElement.querySelector(strElement);
        input.value = strValue
        return true;
    }

    function eclick(strElement, currentElement = document){
        let clickableItem = currentElement.querySelector(strElement);
        clickableItem.click();
        return true;
    }


    function typing(target, string) {
        string.split("").forEach(char => {
            ["keydown", "keypress", "keyup"].forEach(eventType => {
                let event = new KeyboardEvent(eventType, {
                    key: char,
                    code: char.charCodeAt(0),
                    bubbles: true,
                    cancelable: true,
                    charCode: char.charCodeAt(0)
                });
                target.dispatchEvent(event);
            });
    
            // 输入字符到input
            target.value += char;
    
            // 触发input事件
            let inputEvent = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });
            target.dispatchEvent(inputEvent);
        });

        return true;
    }

    function nav(strurl){
        window.location.href = strurl;
        return true;
    }

    function navigate(strurl){
        window.location.href = strurl;
        return true;
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
        return targetElement;
    }


    function end() {
        alert('Attention! The script done');
    }

    return {
        start: start,
        input: input,
        eclick: eclick,
        typing: typing,
        navigate: navigate,
        nav: nav,
        find: find,
        deepfind: deepfind,
        didrender: didrender,
        end: end,
    };
})();
