const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());


/**step 2 */
app.get("/", async (req, res) => {
  try {
    const moviesDetails = await Movies.find({});
    res.send(moviesDetails);
  } catch (err) {
    console.log("~ err", err);
  }
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
//  const movies = [
//     { title: 'Jaws', year: 1975, rating: 8 },
//     { title: 'Avatar', year: 2009, rating: 7.8 },
//     { title: 'Brazil', year: 1985, rating: 8 },
//     { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
// ]
// app.get('/movies/create', (req, res) => {
//     res.send({status:200, message:"ok"})
 
// })
   
// app.get("/movies/read", (req, res) => {
//  res.send({status: 200,data: movies,})
// })

// app.get('/movies/update', (req, res) => {
//     res.send({status:200, message:"ok"})
 
// })
// app.get('/movies/delete', (req, res) => {
//     res.send({status:200, message:"ok"})
 
// })

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

app.post("/movies/add", (req, res) => {
  let rq=req.query;
  let year=parseInt(rq.year);
  
    if ( rq.title == null || isNaN(rq.year) || typeof rq.year === "undefined" || rq.year.toString().length != 4) 
    {
      res.send({status: 403,error: true,message: "you cannot create a movie without title and a year"});
    
      if (rq.rating == "" || typeof rq.rating === "undefined") 
    {
      var length = 4;
      obj=[rq.title,rq.year,length]
    } 
     
   movies.push(obj)
   res.send({movies})
  }
    // movies.push({title: title,year: year,rating: rating });
    // res.send({status: 200,data: movies});
    
});



/**step 9 */
app.delete("/movies/delete/:id", (req, res) => {
    const filmId = req.params.id;
    if (filmId >= movies.length || filmId < 0) 
    {
      res.send({status: 404,error: true,message: `the movie id ${filmId} does not exist `});
    }
    
      obj_i=parseInt(filmId-1)
      console.log(obj_i)
      movies.splice(obj_i,1)
      res.send({movies})
    
  });
 
/**step 10 */
  app.put("/movies/update/:id", (req, res) => {
    var movieID =parseInt(req.params.id-1);
    var movieTitle = req.query.title;
    var movieYear = req.query.year;
    var movieRating = req.query.rating;

    if (movieID < 0 || movieID >= movies.length) {
      res.send("Invalid Movie id");
    }
  
    if (movieTitle != null) {
      movies[movieID].title = movieTitle;
    }
  
    if (movieYear != null) {
      movies[movieID].year = movieYear;
    }
  
    if (movieRating != null) {
      movies[movieID].rating = movieRating;
    }
  
    res.send({data:movies});
});


//step 12
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const uri ="mongodb+srv://client:client@cluster0.c9ert.mongodb.net/MovieDB?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(
    console.log('we are connected to the database ')
)
.catch(error=>{
    console.log('it did not work')
    }
)
const movies = [
    {title: 'Jaws', year: 1975, rating: 8 },
    {title: 'Avatar', year: 2009, rating: 7.8 },
    {title: 'Brazil', year: 1985, rating: 8 },
    {title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
const db = mongoose.connection
  const moviesSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,

    },
    rating: {
      type: Number,
      required: true,
    }
  },
  {  versionKey:false  });
  const Movies = mongoose.model('Movie', moviesSchema);
app.listen(port, () => console.log(`the server started at http://localhost:${port}`))