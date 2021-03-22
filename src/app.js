const express = require("express");
const cors = require('cors');
require("../MongoConnection");
require("../SQLiteConnection");

//importing rosources
const userBooking = require("./routes/booking");

const app = express();
const port = process.env.PORT || 3000;

//middlewares
// app.use((req,res,next) => {
//    if(req.method === 'GET'){
//      res.send('GET requests are disabled')
//    }else{
//      next();
//    }
// })
  
// app.use((req,res,next) => {
//   if(req.method){
//     res.status(503).send('service is temporarily unavailable!')
//   }else{
//     next()
//   }
// })

app.use(
    cors({ 
        origin: 'http://localhost:4200', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'Origin', 
            'x-access-token', 
            'XSRF-TOKEN'
        ], 
        preflightContinue: false 
    })
);


app.use(express.json()); // it parses the json string into object
//in order to use router , we have to register with express
app.use('/user',userBooking);
// app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});