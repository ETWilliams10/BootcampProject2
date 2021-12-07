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
    res.render('cloudinary', {title:'cloudinary', 'layout' : 'main'})
  })

module.exports = router;

