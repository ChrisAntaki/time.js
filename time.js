function Time (callback, options) {
    options = options || {};

    var now = Date.now();
    var value = callback();
    var duration = Date.now() - now + ' ms';

    if (options.notification === 'alert') {
        alert(duration);
        alert(value);
    } else {
        console.log(duration);
        console.log(value);
    }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = Time;
}
