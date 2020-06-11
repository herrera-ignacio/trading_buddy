class Response {
    constructor(res) {
        this.res = res
    }

    as = {
        Dictionary: () => ({
            status: this.res.status,
            statusText: this.res.statusText,
            method: this.res.config.method,
            url: this.res.config.url,
            headers: this.res.headers,
            body: this.res.data || {}
        })
    }
}

module.exports.Response = Response
