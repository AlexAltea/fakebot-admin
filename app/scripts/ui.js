// Loaders
function uiLoaderWaiting() {
    var targets = $('.loader');
    targets.addClass('active');
    targets.addClass('indeterminate');
    targets.html('Waiting for connection...');
}
function uiLoaderConnecting() {
    var targets = $('.loader');
    targets.addClass('active');
    targets.removeClass('indeterminate');
    targets.html('Connecting...');
}
function uiLoaderConnected() {
    var targets = $('.loader');
    targets.removeClass('active');
    targets.removeClass('indeterminate');
}
