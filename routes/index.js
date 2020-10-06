const path = require('path');
const router = require('express').Router();
const resourceRoutes = require('./api/resource');
const snippetRoutes = require('./api/snippet');
const userRoutes = require('./api/userAPI');
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');

// const checkJwt = () => jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${issuer}.well-known/jwks.json`,

//   }),

//   audience: 'https://concat.api/',
//   issuer: 'https://dev-2b7i14d1.us.auth0.com/',
//   algorithms: ['RS256'],
// });

router.use('/api/resources', resourceRoutes);
router.use('/api/snippets', snippetRoutes);
router.use('/api/userAPI', userRoutes);
// router.use('/api/userAPI', checkJwt, userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;