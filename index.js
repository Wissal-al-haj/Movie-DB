const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
/**step2 */
app.get('/', (req, res) => {
    res.send('ok')
 
})
/**step3 */
app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})
 
})
app.get('/time', (req, res) => {
    const nDate = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true ,minute:'numeric',minute60:true});
    res.send({status:200, message:nDate})
})
/**step4 */
app.get('//hello/:id', (req, res) => {
    req.params.id
    res.send({status:200, message:`Hello ${req.params.id}`})
 
})
app.get('/search',(req, res) => {
    const error = false
    if(error)
    res.send({status:200, message:"ok", data:`${req.query.s}`})
    else
    res.send({status:500, error:true, message:"you have to provide a search"})
 })

app.listen(port, () => console.log(`the server started at http://localhost:${port}`))
