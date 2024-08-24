const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const createRoutes = require('./createRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/creates', createRoutes);

module.exports = router;
