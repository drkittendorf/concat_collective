const path = require('path');
const router = require('express').Router();
const resourceRoutes = require('./api/resource');
const snippetRoutes = require('./api/snippet');
const userRoutes = require('./api/userAPI');

router.use('/api/resources', resourceRoutes);
router.use('/api/snippets', snippetRoutes);
router.use('/api/userAPI', userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
