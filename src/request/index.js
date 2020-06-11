const axios = require('axios').default
const { Request } = require('./Request')
const { Response } = require('./Response')
const { Headers } = require('./Headers')

const req = new Request(axios.request, Headers, Response)

return (async () => {
    const res = await req.get('https://www.google.com')
    console.log(res)
    console.log(res.as.Dictionary())
})()
