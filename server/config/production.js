module.exports = {
    PORT: 80,
    SESSION_SECRET: "evenmoreinsanelysecretabsolutelynooneknows",
    SERVER_HOST: "https://www.pepesbubbles.me/api",
    CLIENT_HOST: "https://www.pepesbubbles.me",
    MONGO_OPTIONS: {
        PROTOCOL: "",
        HOST: "",
        PORT: "",
        DB_NAME: "",
        CUSTOM_URI: "mongodb://pepe:cscc09project@mongodb:27017/pepesbubblesDB"
    },
    COOKIE_OPTIONS: {
        sameSite: 'strict',
        httpOnly: true,
        secure: true
    },
    PAYPAL_OPTIONS: {
        client_id: "Your paypal client id",
        client_secret: "Your paypal secret"
    },
    GOOGLE_OAUTH_OPTIONS: {
        clientSecret: "Your Google OAuth secret",
        clientId: "Your Google OAuth client id",
    },
    CORS_ENABLED: false,
    UPLOADS_DEST: 'uploads/',
    MEMCACHED_OPTIONS: {
        URL: "memcached:11211"
    },
    GRAYLOG_ENABLED: false,
    GRAYLOG_OPTIONS: {
        servers: [
            { host: '127.0.0.1', port: 12111 },
            { host: '127.0.0.2', port: 12111 }
        ],
        hostname: "Pepe's Server",
        facility: "node.js",
        bufferSize: 1350
    }
}