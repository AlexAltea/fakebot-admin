function widgetStatusUpdate(status) {
    var targets = $(".fa-widget-status")
    console.log(status);
    targets.find("#fakebot-count-bots-total").html(status.count_bots);
    targets.find("#fakebot-count-commands-total").html(status.count_commands);
    targets.find("#fakebot-count-events-total").html(status.count_events);
}
