const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('ok')
 
})
app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})
 
})
app.get('/time', (req, res) => {
    const nDate = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true ,minute:'numeric',minute60:true});
    res.send({status:200, message:nDate})
})

app.listen(port, () => console.log(`the server started at http://localhost:${port}`))
