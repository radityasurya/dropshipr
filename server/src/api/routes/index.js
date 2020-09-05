const express = require('express')

const router = express.Router() // eslint-disable-line new-cap

/** GET /healthz - Check service health */
router.get('/healthz', (req, res) =>
  res.json({
    code: res.statusCode,
    message: 'Healthsy'
  })
)

module.exports = router
