var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MediaSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    date_of_publication: {type: Date},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for individual media's URL
MediaSchema
.virtual('url')
.get(function () {
  return '/mydiatent/media/' + this._id;
});

// Virtual for date of work publication *this may need to go elsewhee
//AuthorSchema
//.virtual('Date of publication')
//.get(function () {
  //return (this.date_of_publication.getYear() - this.date_of_publication.getYear()).toString();
//});


//Export model
module.exports = mongoose.model('Media', MediaSchema);