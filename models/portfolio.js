const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  image:{
      type : String,
      required:"Image cannot be blank!"
      },
  bride: {
        type : String,
        required:"Name cannot be blank!"
      },
  groom: {
        type : String,
        required:"Name cannot be blank!"
      },
  paragraph: {
       type : String,
     },
  video: {
        type : String,
      },
  image_slideshow: [{
        type: String
      }]
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
