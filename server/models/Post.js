const { Schema, model } = require('mongoose');
const moment = require('moment');
const commentSchema = require('./Comment');

const postSchema = new Schema(
  {
    title:{
      type: String,
      minlength: 1,
      maxlength:80
    },
    postText: {
      type: String,
      required: 'You need to leave a post!',
      minlength: 1,
      maxlength: 1000
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
