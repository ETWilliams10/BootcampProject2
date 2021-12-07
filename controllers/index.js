const router = require('express').Router();
const apiRoutes = require('./api');
const cloudinary = require('./cloudinary');

router.use('/api', apiRoutes);
router.use('/cloudinary', cloudinary);

module.exports = router;

