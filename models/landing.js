const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
   title:String,
   film:String,
   homephoto:[{
        type: String
      }],
   photo:[{
        type: String
      }]
});

const Landing = mongoose.model("Landing", landingSchema);
module.exports = Landing;
