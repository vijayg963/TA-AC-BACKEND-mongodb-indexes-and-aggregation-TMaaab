const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// this is the user schema for the stackoverflow

let userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reputation: {
    type: Number,
  },
  questionAsked: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Answer',
    },
  ],
});

let User = mongoose.model('User', userSchema);

module.exports = User;
