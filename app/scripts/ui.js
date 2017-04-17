// Loaders
function uiLoaderWaiting() {
    var targets = $('.loader');
    targets.addClass('active');
    targets.addClass('indeterminate');
    targets.html('Waiting for connection...');
    var dimmer = $('.dimmer');
    dimmer.dimmer('show');
    dimmer.parent().addClass('dimmable dimmed');
}
function uiLoaderConnecting() {
    var targets = $('.loader');
    targets.addClass('active');
    targets.removeClass('indeterminate');
    targets.html('Connecting...');
    var dimmer = $('.dimmer');
    dimmer.dimmer('show');
    dimmer.parent().addClass('dimmable dimmed');
}
function uiLoaderConnected() {
    var targets = $('.loader');
    targets.removeClass('active');
    targets.removeClass('indeterminate');
    var dimmer = $('.dimmer');
    dimmer.dimmer('hide');
    dimmer.parent().removeClass('dimmable dimmed');
}

// Events
function uiEventInit() {
    uiLoaderWaiting();
    uiEventDisconnected();
}
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
