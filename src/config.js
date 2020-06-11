const environment = [
    'BINANCE_KEY',
    'BINANCE_SECRET',
    'BINANCE_URL'
]

for (let key of environment) {
    module.exports[key] = process.env[key]
}
