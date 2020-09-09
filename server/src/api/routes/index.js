const express = require('express');
const accountRoutes = require('../services/account/account.route');
const scrapeRoutes = require('../services/scrape/scrape.route');

const router = express.Router();

/** GET /healthz - Check service health */
router.get('/healthz', (req, res) =>
  res.json({
    code: res.statusCode,
    message: 'Healthy',
  }),
);

router.use('/accounts', accountRoutes);
router.use('/scrape', scrapeRoutes);

module.exports = router;
