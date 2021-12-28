const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
/**step 2 */
app.get('/', (req, res) => {
    res.send('ok')
 
})

/**step 3 */
app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})
 
})
app.get('/time', (req, res) => {
    const nDate = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true ,minute:'numeric',minute60:true});
    res.send({status:200, message:nDate})
})

/**step 4 */
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

 /**step 5 */
app.get('/movies/create', (req, res) => {
    res.send({status:200, message:"ok"})
 
})
   
app.get("/movies/read", (req, res) => {
res.send({status: 200,data: movies})
})

app.get('/movies/update', (req, res) => {
    res.send({status:200, message:"ok"})
 
})
app.get('/movies/delete', (req, res) => {
    res.send({status:200, message:"ok"})
 
})

app.listen(port, () => console.log(`the server started at http://localhost:${port}`))


