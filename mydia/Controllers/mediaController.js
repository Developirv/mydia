var Media = require('../models/media');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all media.
exports.media_list = function(req, res) {
    res.send('NOT IMPLEMENTED: media Tent');
};

// Display detail page for a specific media.
exports.media_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: media detail: ' + req.params.id);
};

// Display media create form on GET.
exports.media_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: media create GET');
};

// Handle media create on POST.
exports.media_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: media create POST');
};

// Display media delete form on GET.
exports.media_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: media delete GET');
};

// Handle media delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: media delete POST');
};

// Display media update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: media update GET');
};

// Handle media update on POST.
exports.media_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: media update POST');
};