const router = require('express').Router();
const { response } = require('express');
const cloudinary = require('../helpers/cloudinary');

router.post('/upload', function(req, res) {
  cloudinary.upload('testUpload')
  .then((response) => {
    return res.status(200).send(response)
  });
})

router.get('/upload', function(req, res) {
  res.render('media', {'layout': 'main'})
})
  
router.get('/list', function(req, res) {
  console.log('call list route')

// let images = [];
  cloudinary.fetchGallery()
    .then((response) => {
      // console.log(response.resources)
      res.render('medialist', {'layout': 'main', 'mediaItems': response.resources})
    })


  // res.render('medialist', {'layout': 'main'})
})


module.exports = router;
  
  