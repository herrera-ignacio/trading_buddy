class Headers {
    constructor() {
        this['Accept'] = 'application/json'
        this['Content-Type'] = 'application/json'
        this['X-Requested-With'] = 'XMLHttpRequest'
        this['Accept-Language'] = 'en'
    }

    setAuth(token) {
        this['Authorization'] = `Bearer ${token}`
    }

    as = {
        Dictionary: () => {
            const dict = {}
            for (let key in this) {
                if ( this.hasOwnProperty(key) && typeof this[key] === 'string') {
                    dict[key] = this[key]
                }
            }
            return dict
        }
    }
}

module.exports.Headers = Headers
