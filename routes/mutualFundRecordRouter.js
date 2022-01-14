const mutualFundController = require('../controllers/mutualFundRecordController.js')

// create a Router object from express
const router = require('express').Router()

// add a mutual fund to the table
router.post('/:symbol/:fund/:id', mutualFundController.addMutualFunds)

// access all the customers who bought mutual funds and the funds they bought
router.get('/all', mutualFundController.getAllCustomersHoldings)

// get all mutual funds bought by that customer
router.get('/user/:id', mutualFundController.getOneCustomerHoldings)

module.exports = router
