const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    commentAuthor: {
        type: String,
        required: true
    }, 
    commentCreatedAt: {
        type: Date,
        default: Date.now
      },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;