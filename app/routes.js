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
  router.get('/v1/fundingLineStructure-chosen-success', function (req, res) {

    res.render('v1/fundingLineStructure-chosen-success', { 'name' : 'Foo' });

  });

  router.get('/v1/fundingLineStructure-chosen-error', function (req, res) {

    res.render('v1/fundingLineStructure-chosen-error', { 'name' : 'Foo' });

  });

  router.get('v1/funding-management/16-19-results-v2-success', function (req, res) {

    res.render('v1/funding-management/16-19-results-v2-success', { 'name' : 'Foo' });

  });

  router.get('v1/funding-approvals/16-19/16-19-results-error', function (req, res) {

    res.render('v1/funding-approvals/16-19/16-19-results-error', { 'name' : 'Foo' });

  });
module.exports = router
