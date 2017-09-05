<<<<<<< HEAD
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
=======
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
>>>>>>> 40ff5ea7cf65288d6b76272e285add35ed5c4bea
