const Portfolio = require('../models/portfolio');
const moment = require('moment');
// SHOW INDEX PORTFOLIO
exports.getAllPortfolio = function(req,res,next){
    Portfolio.find({},function(err,allPortfolio){
        if(err){
            res.status(400).json({err})
        }
        else {
            Portfolio.count().exec(function(err,count){
                if(err){
                    res.status(400).json({err})
                  } else {
                    res.status(200).json({portfolios:allPortfolio});
                }
            })
        }
    })
}

//SHOW PORTFOLIO
exports.showPortfolio = function(req,res,next){
  //find the campground with provided ID
    Portfolio.findById(req.params.id,function(err, foundPortfolio){
        if(err){
          res.status(400).json({message:"Fail Show"});
        } else {
          res.status(200).json({portfolio:foundPortfolio});
        }
    });
}

//EDIT PORTFOLIO
exports.updatePortfolio = function(req,res,next){
  Portfolio.findByIdAndUpdate(req.params.id,req.body, function(err, updatedPortfolio){
        if(err){
            res.status(400).json({message:err});
        } else {
            res.status(200).json({portfolio:req.body});
        }
    });
}

//DELETE PORTFOLIO
exports.deletePortfolio = function(req,res,next){
  Portfolio.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.status(400).json({message:err});
      } else {
          res.status(200).json({message:"successful deleted"});
      }
   })
}

//ADD PORTFOLIO
exports.addPortfolio = function(req,res){
  const image = req.body.image;
  const bride = req.body.bride;
  const groom = req.body.groom;
  const video = req.body.video;
  const paragraph = req.body.paragraph;
  const image_slideshow = req.body.image_slideshow;
  //not exist create and save
  const newPortfolio = {
    image:image,
    bride:bride,
    groom:groom,
    video:video,
    paragraph:paragraph,
    image_slideshow:image_slideshow
  };

  Portfolio.create(newPortfolio, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.status(200).json({portfolio:req.body});
        }
    })
}


module.exports= exports;
