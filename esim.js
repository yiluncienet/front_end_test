// esim.js
var esim = (function() {
    
    
    function start() {
        alert('Attention! The script will start');
    }

    function input(strElement, strValue){
        let input = document.querySelector(strElement);
        input.value = strValue
    }

    function click(strElement){
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
        click: click,
        navigate: navigate,
        nav: nav,
        end: end,
    };
})();
