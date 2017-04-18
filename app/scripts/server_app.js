function ServerApp() {
    // Members
    this.server = undefined;
    this.token = undefined;

    // Send request
    this.request = function (type, path, config) {
        // Default configuration
        if (typeof config.data === 'undefined') {
            config.data = {};
        }
        if (typeof config.data.token == 'undefined') {
            config.data.token = this.token;
        }
        if (typeof config.error === 'undefined') {
            config.error = function() {
                instance.disconnect();
            }
        }
        // Send request
        $.ajax({
            type: type,
            url: this.server + path,
            crossDomain: true,
            data: config.data,
            success: config.success,
            error: config.error,
        });
    }

    // API
    this.get_status = function () {
        var instance = this;
        this.request('GET', '/status', {
            success: function(data) {
                widgetStatusUpdate(data);
            }
        });
    }

    // Get full list of bots
    this.get_bots = function () {
        var instance = this;
        this.request('GET', '/bots', {
            success: function(data) {
                fa.widget_minimap.draw(data);
            }
        });
    },

    // Get a particular bot given its ID
    this.get_bot = function (botid) {
        var instance = this;
        this.request('GET', '/bots/' + botid, {
            success: function(data) {
                /* Update UI */
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
        var instance = this;
        instance.server = server;
        instance.token = token;
        this.request('GET', '/login', {
            success: function(data) {
                uiEventConnected(server);
                instance.get_status();
                instance.get_bots();
            },
            error: function() {
                console.log("Could not connect to Fakebot server");
                instance.disconnect();
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
