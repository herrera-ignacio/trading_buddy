class Binance {
    constructor(config) {
        this.key = config.key
        this.secret = config.secret
        this.baseUrl = config.apiUrl
    }
}

module.exports.Binance = Binance