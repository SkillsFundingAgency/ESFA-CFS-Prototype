const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

router.post('/v1/view-results/view-specification-results/select-specification', function (req, res) {

    let viewSpecification = req.session.data['viewSpecificationSelection']
    console.log(viewSpecification)
    if (viewSpecification === 'live data') {
        res.redirect('view-specification')
    } else if (viewSpecification === 'no live data') {
        res.redirect('view-specification-no-live-data')
    }
  });

module.exports = router
