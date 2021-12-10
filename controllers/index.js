const router = require('express').Router();
const apiRoutes = require('./api');
const media = require('./media');

router.use('/api', apiRoutes);
router.use('/media', media);

module.exports = router;

