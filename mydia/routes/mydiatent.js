
var express = require('express');
var router = express.Router();

// Require controller modules.
var media_controller = require('../controllers/mediaController');
var author_controller = require('../controllers/authorController');


/// Media ROUTES ///

// GET Mydia home page.
router.get('/', media_controller.index);

// GET request for creating a new media. NOTE This must come before routes that display media (uses id).
router.get('/mydiatent/create', media_controller.media_create_get);

// POST request for creating new Media.
router.post('/mydiatent/create', media_controller.media_create_post);

// GET request to delete Media.
router.get('/mydiatent/:id/delete', media_controller.media_delete_get);

// POST request to delete Media .
router.post('/mydiatent/:id/delete', media_controller.media_delete_post);

// GET request to update Media.
router.get('/mydiatent/:id/update', media_controller.media_update_get);

// POST request to update Media.
router.post('/mydiatent/:id/update', media_controller.media_update_post);

// GET request for one Media.
router.get('/mydiatent/:id', media_controller.media_detail);

// GET request for list of all Media items.
router.get('/mydiatent', media_controller.media_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. 
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

module.exports = router;