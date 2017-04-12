google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(widgetMinimapDraw);

var fa = {
    server_app: new ServerApp()
};

$(document).ready(function () {
    uiEventInit();
})

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
