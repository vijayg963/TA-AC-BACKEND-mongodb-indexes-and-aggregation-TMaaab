const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let answerSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
  upVote: {
    type: Number,
    default: 0,
  },
  downVote: {
    type: Number,
    default: 0,
  },
});

let Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
