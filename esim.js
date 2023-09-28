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
        window.location.href = 'strurl';
    }

    function navigate(strurl){
        window.location.href = 'strurl';
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
        end: end,
    };
})();
