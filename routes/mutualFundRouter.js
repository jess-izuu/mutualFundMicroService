const mutualFundController = require('../controllers/mutualFundController.js')

// create a Router object from express
const router = require('express').Router()

// add all mutual fund names to the table
router.post('/all', mutualFundController.addMutualFunds)

// access all the mutual funds
router.get('/all', mutualFundController.getAllMutualFunds)

// access one mutual fund by symbol
router.get('/:symbol', mutualFundController.getOneMutualFund)

module.exports = router
