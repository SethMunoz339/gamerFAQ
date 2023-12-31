const { Schema, model } = require('mongoose');


const questionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    questionAuthor: {
        type: String,
        required: true
    },
    questionCreatedAt: {
        type: Date,
        default: Date.now
    },
    gameId: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
});

const Question = model('Question', questionSchema);

module.exports = Question;