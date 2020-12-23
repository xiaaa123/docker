const request = require('superagent')
setInterval(async () => {
    res = await request.get(`http://localhost:8001`)
    console.log(`Page ${res.text}`)
}, 100)
