const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const userSchema = new Schema({
  email:{type: String,unique:true,lowercase:true},
  password:String,
});

//onsave hook encrypt password
//before save
userSchema.pre('save',function(next){
  const user =this;
  //generate salt then callback
  bcrypt.genSalt(10,function(err,salt){
    if(err){return next(err)}
    //hash or encrypt using salt to password
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err){return next(err)}
      //encrypted password
      user.password = hash;
      next();
    })
  })
})

userSchema.methods.comparedPassword = function(candidatePassword,callback){
  bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
    if(err){return callback(err)}
    callback(null,isMatch);
  })
}

//create model class
const ModelClass = mongoose.model('user',userSchema);

//export
module.exports = ModelClass;
