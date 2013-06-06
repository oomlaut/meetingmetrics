//@ codekit-append "vendor/bootstrap/bootstrap-transition.js"
//@ codekit-append "vendor/bootstrap/bootstrap-affix.js"
//@ codekit-append "vendor/bootstrap/bootstrap-alert.js"
//@ codekit-append "vendor/bootstrap/bootstrap-modal.js"
//@ codekit-append "vendor/bootstrap/bootstrap-dropdown.js"
//@ codekit-append "vendor/bootstrap/bootstrap-scrollspy.js"
//@ codekit-append "vendor/bootstrap/bootstrap-tab.js"
//@ codekit-append "vendor/bootstrap/bootstrap-tooltip.js"
//@ codekit-append "vendor/bootstrap/bootstrap-popover.js"
//@ codekit-append "vendor/bootstrap/bootstrap-button.js"
//@ codekit-append "vendor/bootstrap/bootstrap-collapse.js"
//@ codekit-append "vendor/bootstrap/bootstrap-carousel.js"
//@ codekit-append "vendor/bootstrap/bootstrap-typeahead.js"
//
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

(function(){
    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10) * 1; // don't forget the second parm
        var hours   = Math.floor(sec_num / 3600) * 1;
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60) * 1;
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    };
}());
