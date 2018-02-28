const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const userRoutes = require('./routes/user');
const landingRoutes = require('./routes/landing');
const portfolioRoutes = require('./routes/portfolio');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const seedDB = require("./seed");
// seedDB();

//db setup
mongoose.connect(config.mongoURL);

//app setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use('/api/user/', userRoutes);
app.use('/api/landing/', landingRoutes);
app.use('/api/portfolio/', portfolioRoutes);

const PORT = process.env.PORT||3090;
app.listen(PORT,function(){
  console.log(`Server is listening on port ${PORT}`)
})
