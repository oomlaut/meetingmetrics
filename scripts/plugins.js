/*
@ codekit-prepend "vendor/bootstrap/bootstrap-transition.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-affix.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-alert.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-modal.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-dropdown.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-scrollspy.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-tab.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-tooltip.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-popover.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-button.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-collapse.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-carousel.js"
@ codekit-prepend "vendor/bootstrap/bootstrap-typeahead.js"
*/
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

/**
 * Modify the String class prototype to deal with an integer
 * @return string formatted HH:MM:SS
 */
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

(function(){
    window.Ticker = function(args){
        var context = this;
        this.secondsPassed = 0;
        this.heartbeat = null;
        this.init = function(){
            console.log(args);
        };
        this.start =  function(obj){
            if(obj.pad > 0) {
                this.secondsPassed += (obj.pad * 60);
            }
            this.heartbeat = window.setInterval(function(){
                obj.el.trigger("update", {
                    elapsed: ++context.secondsPassed
                });
            }, 1000);
        };
        this.stop = function(){
            window.clearInterval(this.heartbeat);
        };
        this.reset = function(){
            this.secondsPassed = 0;
            window.clearInterval(this.heartbeat);
            return true;
        };
        return this;
    };
}());
