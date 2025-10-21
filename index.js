//set up express 
const express = require('express');
const app = express();
const port = 8000;

// load the route handlers
const mainRoutes = require('./routes/main');

//use the routes
app.use('/', mainRoutes);


//start listening to http for requests
app.listen(port,
    () => console.log(`Node server is running on port ${port}!`));