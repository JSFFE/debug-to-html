var DebugToHTML = function (elementId) {
    var log = console.log;
    var error = console.error;
    var warn = console.warn;
    var debg = console.debug;
    var clear = console.clear;

    console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        log.apply(console, args);
        appendToElement('<p>' + 'Info: ' + concatenatedString + '</p>');
    }

    console.error = function() {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        error.apply(console, args);
        appendToElement('<p style="color: red">' + 'Error: ' + concatenatedString + '</p>');
    }

    console.warn = function() {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        warn.apply(console, args);
        appendToElement('<p style="color: yellow">' + 'Warn: ' + + concatenatedString + '</p>');
    }

    console.debug = function() {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        debug.apply(console, args);
        appendToElement('<p>' + 'Debug: ' + concatenatedString + '</p>');
    }

    console.clear = function() {
        clear();
        clearElement();
    }

    var concatStrings = function(args) {
        var result = '';

        for (var i in args) {
            var arg = args[i];
            if (typeof arg === 'object') {
                result += ' ' + JSON.stringify(arg);
            } else {
                result += ' ' + arg;
            }
        }

        return result;
    }

    var appendToElement = function(htmlString) {
        var element = document.getElementById(elementId);
        element.insertAdjacentHTML('beforeend', htmlString);
        element.scrollTop = element.lastChild.offsetTop;
    }

    var clearElement = function() {
        var element = document.getElementById(elementId);
        element.innerHTML = '';
    }
};
