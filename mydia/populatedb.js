//var async = require('async')
var Author = require('./models/author')
//var Media = require('./models/media')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function authorCreate(first_name, last_name, cb) {
    authordetail = {first_name:first_name , last_name: last_name }
   
var authors = []    

var author = new Author(authordetail);
        
  author.save(function (err) {
     if (err) {
        cb(err, null)
        return
      }
      console.log('New Author: ' + author);
      authors.push(author)
      cb(null, author)
    }  );
  }