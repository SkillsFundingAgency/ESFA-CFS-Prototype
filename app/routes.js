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
  router.get('/v1/fundingLineStructure-gag-chosen', function (req, res) {

    res.render('v1/fundingLineStructure-gag-chosen', { 'name' : 'Foo' });

  });
  router.get('v1/funding-management/16-19-results-v2-success', function (req, res) {

    res.render('v1/funding-management/16-19-results-v2-success', { 'name' : 'Foo' });

  });
  router.get('v1/funding-management/fundingLineStructure-gag-chosen', function (req, res) {

    res.render('v1/funding-management/fundingLineStructure-gag-chosen', { 'name' : 'Foo' });

  }); 
  router.get('/v1/funding-management/16-19/16-19-results-v4', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-v4', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/16-19-results-v5', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-v5', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/16-19-results-v6', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-v6', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/16-19-results-v1', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-v1', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/16-19-results-conflict', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-conflict', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/16-19-results-option2-unmatched', function (req, res) {

    res.render('v1/funding-management/16-19/16-19-results-option2-unmatched', { 'name' : 'Foo' });

  });
  router.get('/v1/my-user-permissions1', function (req, res) {

    res.render('v1/my-user-permissions1', { 'name' : 'Foo' });

  });
  router.get('/v1/my-user-permissions2', function (req, res) {

    res.render('v1/my-user-permissions2', { 'name' : 'Foo' });

  });
  router.get('/v1/my-user-permissions1/individual-funding-stream1', function (req, res) {

    res.render('v1/my-user-permissions1/individual-funding-stream1', { 'name' : 'Foo' });

  });

  router.get('/v1/funding-management/16-19/channel-select--16-19-payment', function (req, res) {

    res.render('v1/funding-management/16-19/channel-select--16-19-payment', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/channel-select--16-19-unmatched', function (req, res) {

    res.render('v1/funding-management/16-19/channel-select--16-19-unmatched', { 'name' : 'Foo' });

  });

  router.get('/v1/funding-management/16-19/channel-select--16-19-statement', function (req, res) {

    res.render('v1/funding-management/16-19/channel-select--16-19-statement', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/funding-release--16-19-scenario1', function (req, res) {

    res.render('v1/funding-management/16-19/funding-release--16-19-scenario1', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/funding-release--16-19-scenario2', function (req, res) {

    res.render('v1/funding-management/16-19/funding-release--16-19-scenario2', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/funding-release--16-19-statement', function (req, res) {

    res.render('v1/funding-management/16-19/funding-release--16-19-statement', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/funding-release--16-19-payment', function (req, res) {

    res.render('v1/funding-management/16-19/funding-release--16-19-payment', { 'name' : 'Foo' });

  });
  router.get('/v1/funding-management/16-19/funding-release--16-19-conflict', function (req, res) {

    res.render('v1/funding-management/16-19/funding-release--16-19-conflict', { 'name' : 'Foo' });

  });
  

  // router.get('v1/funding-approvals/16-19/16-19-results-error', function (req, res) {

  //   res.render('v1/funding-approvals/16-19/16-19-results-error', { 'name' : 'Foo' });

  // });
  // router.get('/v1/funding-approvals/16-19/16-19-results', function (req, res) {

  //   res.render('/v1/funding-approvals/16-19/16-19-results', { 'name' : 'Foo' });

  // });
module.exports = router
