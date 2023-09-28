// esim.js
var esim = (function() {
    
    
    function start() {
        alert('Attention! The script will start');
    }

    function input(strElement, strValue){
        let input = document.querySelector(strElement);
        input.value = strValue
    }

    function button(){
        let button = document.querySelector(strElement);
        button.clicked = true;
    }


    function end() {
        alert('Attention! The script done');
    }


    return {
        start: start,
        input: input,
        button: button,
        end: end,
    };
})();
