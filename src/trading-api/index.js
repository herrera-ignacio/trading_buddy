const { BINANCE_URL, BINANCE_KEY, BINANCE_SECRET } = require('../config')
const { Binance } = require('./Binance')

const config = {
    key: BINANCE_KEY,
    secret: BINANCE_SECRET,
    apiUrl: BINANCE_URL
}

const api = new Binance(config)

console.log(api)