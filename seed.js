const mongoose = require("mongoose");
const Landing = require("./models/landing");
const Portfolio = require("./models/portfolio");
var data = [
    {
      image:"http://res.cloudinary.com/simpulweds/image/upload/v1514433005/Slideshow/SlidePhoto/Photo-01.jpg",
      groom:"groom",
      bride:"bride",
      video:"https://www.youtube.com/embed/bLxEXzZgC9U",
      paragraph:"paragraph",
      image_slideshow:["http://res.cloudinary.com/simpulweds/image/upload/v1507882931/Slideshow/2.jpg","http://res.cloudinary.com/simpulweds/image/upload/v1507882931/Slideshow/2.jpg","http://res.cloudinary.com/simpulweds/image/upload/v1507882931/Slideshow/2.jpg"]
    },
    {
      image:"a",
      groom:"groom",
      bride:"bride",
      image_slideshow:["a","b","c"]
    }
]

var dataLanding = {
      title:"Simpulweds",
      film:"https://www.youtube.com/embed/bLxEXzZgC9U",
      photo:[
        "http://res.cloudinary.com/simpulweds/image/upload/v1514433005/Slideshow/SlidePhoto/Photo-01.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514433009/Slideshow/SlidePhoto/Photo-02.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432873/Slideshow/SlidePhoto/Photo-03.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514433015/Slideshow/SlidePhoto/Photo-04.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432929/Slideshow/SlidePhoto/Photo-05.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432882/Slideshow/SlidePhoto/Photo-06.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432951/Slideshow/SlidePhoto/Photo-07.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432929/Slideshow/SlidePhoto/Photo-08.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432941/Slideshow/SlidePhoto/Photo-09.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1514432990/Slideshow/SlidePhoto/Photo-10.jpg",
      ],
      homephoto:[
        "http://res.cloudinary.com/simpulweds/image/upload/v1507882933/Slideshow/1.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1507882931/Slideshow/2.jpg",
        "http://res.cloudinary.com/simpulweds/image/upload/v1507882942/Slideshow/3.jpg"
      ]
    }


function seedDB(){
   //Remove all portfolio
   Portfolio.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed portfolio");
         //add a few portfolio
        data.forEach(function(seed){
            Portfolio.create(seed, function(err, portfolio){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a portfolio");
                }
            });
        });
    });

    Landing.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed landing");
          //add a few portfolio
             Landing.create(dataLanding, function(err, landing){
                 if(err){
                     console.log(err)
                 } else {
                     console.log("added a landing");
                 }
             });
     });

}

module.exports = seedDB;
