// Globals
var fa = {
    // Widgets
    widget_minimap: new WidgetMinimap(),
    // Server
    server_app: new ServerApp(),
};

// Initialization
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(eventChartsReady);

$(document).ready(function () {
    uiEventInit();
})

// Events
$(window).resize(function() {
    if (this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 100);
});

$(window).on('resizeEnd', function() {
    fa.widget_minimap.draw();
});

function eventChartsReady() {
    fa.widget_minimap.init();
    fa.widget_minimap.draw();
}

// Widgets
$('#fa-widget-connect').submit(function () {
    var form = $(this);
    var server = form.find('input[name=fakebot-server]').val();
    var token = form.find('input[name=fakebot-token]').val();
    fa.server_app.connect(server, token);
    return false;
});

$('#fa-widget-disconnect').submit(function () {
    fa.server_app.disconnect();
    return false;
});
