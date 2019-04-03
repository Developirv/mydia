var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_publication: {type: Date},
    media: {type: String, required: true, max: 100},
    genre: {type: String, required: true, max: 100},
  }
);

// Author's name
AuthorSchema
.virtual('Name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

// Virtual for date of work publication
AuthorSchema
.virtual('Date of publication')
.get(function () {
  return (this.date_of_publication.getYear() - this.date_of_publication.getYear()).toString();
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


//Export model
module.exports = mongoose.model('Author', AuthorSchema);