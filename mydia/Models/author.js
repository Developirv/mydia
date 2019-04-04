var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    media: {type: String, required: true, max: 100},
    genre: {type: String, required: true, max: 100},
    description: {type: String, required: true, max:500},
  }
);

// Author's name
AuthorSchema
.virtual('Name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

// Virtual for Media Type
AuthorSchema
.virtual('Media')
.get(function () {
  return this.media;
});

// Virtual for Media Genre
AuthorSchema
.virtual('Genre')
.get(function () {
  return this.genre;
});

// Virtual for Media Description
AuthorSchema
.virtual('Description')
.get(function () {
  return this.description;
});



//Export model
module.exports = mongoose.model('Author', AuthorSchema);



