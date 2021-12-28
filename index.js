const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

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
 const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
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

/**step6 */
app.get("/movies/read/by-date", (req, res) =>
  res.send({
    data: movies.sort((f, s) => {
      return f.year - s.year;
    }),
  })
);

app.get("/movies/read/by-rating", (req, res) =>
  res.send({
    data: movies.sort((f, s) => {
      return s.rating - f.rating;
    }),
  })
);

app.get("/movies/read/by-title", (req, res) =>
  res.send({
    data: movies.sort((f, s) => {
      return f.title.localeCompare(s.title);
    }),
  })
);
/**step7 */
app.get("/movies/read/id/:id", (req, res) => {
    var id = req.params.id;
    if (id <= movies.length && id > 0) 
    {
    res.send({status: 200,data: movies[id - 1]});
    }
    else 
    {
      res.send({ status: 404, error: true,message: `The Movie ${id} dpes not exists`});
    }
});
/**step8 */

app.get("/movies/add", (req, res) => {
    const title = req.query.title;
    const year = req.query.year;
    const rating = req.query.rating;
  
    if ( title == null || isNaN(year) || typeof year === "undefined" || year.toString().length != 4) 
    {
      res.send({status: 403,error: true,message: "you cannot create a movie without title and a year"});
    } 
    else if (rating == "" || typeof rating === "undefined") 
    {
      var lenght = 4;
      movies.push({title: title,year: year,rating: length,});
      res.send(movies);
    } 
    else 
    {
      movies.push({title: title,year: year,rating: rating });
      res.send({status: 200,data: movies});
    }
});

/**step 9 */
app.get("/movies/delete/:id", (req, res) => {
    let filmId = req.params.id;
    if (filmId >= movies.length || filmId < 0) 
    {
      res.send({status: 404,error: true,message: `the movie id ${filmId} does not exist `});
    }
    else 
    {
      let films = movies;
      films.splice(filmId, 1);
      res.send(films);
    }
  });

app.listen(port, () => console.log(`the server started at http://localhost:${port}`))


