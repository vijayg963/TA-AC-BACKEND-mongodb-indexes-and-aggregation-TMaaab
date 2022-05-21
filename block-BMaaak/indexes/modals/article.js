const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  tags: [{ type: String }],
});

articleSchema.index({ tags: 1 });

articleSchema.review.createIndex({ title: 'text', description: 'text' });

let Article = mongoose.model('Article', articleSchema);
module.exports = Article;
