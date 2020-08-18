const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bycrypt');

const followingSchema = require('./Following');
const followersSchema = require('./Followers')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    post: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
        }
     ],
    following:[
      followingSchema
    ],
    followers:[
      followersSchema
    ]

},
{
    toJSON: {
      virtuals: true
    }
  }

);
  
  // set up pre-save middleware to create password
   userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  
  // get follower count
  userSchema.virtual('followerCount').get(function() {
    return this.followers.length;
  });
  //get following count
  userSchema.virtual('followingCount').get(function() {
      return this.following.length;
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;