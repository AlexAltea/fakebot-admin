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

// Events
function uiEventConnected(server) {
    uiLoaderConnected();
    $('#fa-widget-connect').hide();
    $('#fa-widget-disconnect').show();
    $('#fa-widget-disconnect > #fakebot-server').html(server)
}
function uiEventDisconnected() {
    uiLoaderWaiting();
    $('#fa-widget-disconnect').hide();
    $('#fa-widget-connect').show();
}
