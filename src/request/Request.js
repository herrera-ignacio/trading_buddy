class Request {
    constructor(fetchApi, Headers, Response) {
        this.fetch = fetchApi
        this.headers = new Headers(),
        this.Response = Response
    }

    _config({ url, method, body, customHeaders }) {
        const headers = { ...this.headers.as.Dictionary(), ...customHeaders }
        const config = { method, headers, url }
        if (body) {
            config.body = headers['Content-Type'] === 'application/json'
                ? JSON.stringify(body) 
                : body
        }
        return config
    }

    async _request({ method, url, body, customHeaders }) {
        const res = await this.fetch(this._config({
            url,
            method,
            body,
            customHeaders
        }))
        return new this.Response(res)
    }

    setAuth(token) {
        this.headers.setAuth(token)
    }

    async get(url, customHeaders = {}) {
        return this._request({ method: 'get', url, customHeaders })
    }
}

module.exports.Request = Request
