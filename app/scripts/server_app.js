function ServerApp() {
    // Members
    this.server = undefined;
    this.token = undefined;

    // API
    /**
     * Get full list of bots
     */
    this.get_bots = function () {
        $.ajax({
            type: 'GET',
            url: server + '/bots',
            crossDomain: true,
            success: function() {
                /* Update UI */
            },
            error: function() {
                this.disconnect();
            }
        });
    },

    /**
     * Get a particular bot given its ID
     */
    this.get_bot = function (botid) {
        $.ajax({
            type: 'GET',
            url: server + '/bots/' + botid,
            crossDomain: true,
            success: function() {
                /* Update UI */
            },
            error: function() {
                this.disconnect();
            }
        });
    },
    // Connection
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
                uiEventConnected(server);
                this.server = server;
                this.token = token;
            },
            error: function() {
                console.log("Could not connect to Fakebot server");
                this.disconnect();
            }
        });
    }

    /**
     * Disconnect from a Fakebot server
     */
    this.disconnect = function () {
        uiEventDisconnected();
        this.server = undefined;
        this.token = undefined;
    }
}
