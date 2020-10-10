const path = require('path');
const router = require('express').Router();
const resourceRoutes = require('./api/resource');
const snippetRoutes = require('./api/snippet');
const userRoutes = require('./api/userAPI');
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');
// const issuer = process.env.REACT_APP_ISSUER;
// const audience = process.env.REACT_APP_AUDIENCE

// if (!issuer || !audience) {
//   throw new Error('Confirm .env is populated');
// }

// how to send token in jwt 
// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${issuer}.well-known/jwks.json`,

//   }),

//   audience: audience,
//   issuer: issuer,
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
