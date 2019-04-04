
var express = require('express');
var router = express.Router();

// Require controller modules.
var media_controller = require('../controllers/mediaController');
var author_controller = require('../controllers/authorController');


/// BOOK ROUTES ///

// GET Mydia home page.
router.get('/', media_controller.index);

// GET request for creating a new media. NOTE This must come before routes that display media (uses id).
router.get('/media/create', media_controller.media_create_get);

// POST request for creating Book.
router.post('/media/create', media_controller.media_create_post);

// GET request to delete Book.
router.get('/media/:id/delete', media_controller.media_delete_get);

// POST request to delete .
router.post('/media/:id/delete', media_controller.media_delete_post);

// GET request to update Media.
router.get('/media/:id/update', media_controller.media_update_get);

// POST request to update Media.
router.post('/media/:id/update', media_controller.media_update_post);

// GET request for one Book.
router.get('/media/:id', media_controller.media_detail);

// GET request for list of all Book items.
router.get('/medias', media_controller.media_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
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