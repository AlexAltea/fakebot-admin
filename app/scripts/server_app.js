function ServerApp() {
    // Members
    this.server = undefined;
    this.token = undefined;

    /**
     * Connect to a Fakebot server
     */
    this.connect = function (server, token) {
        uiLoaderConnecting();
        // Preprocessing
        if (!server.startsWith('http://') &&
            !server.startsWith('https://')) {
            server = 'http://' + server;
        }
        // Login
        $.ajax({
            type: 'GET',
            url: server + '/login',
            data: {'token': token},
            crossDomain: true,
            success: function() {
                uiLoaderConnected();
                this.server = server;
                this.token = token;
            },
            error: function() {
                uiLoaderWaiting();
            }
        });
    }
}
