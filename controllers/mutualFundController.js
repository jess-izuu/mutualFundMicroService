// require the db created in the index file
const { default: axios } = require('axios')
const db = require('../models/index')
const url =
  'https://financialmodelingprep.com/api/v3/symbol/available-mutual-funds?apikey='

// get the mutual fund model
const MutualFund = db.MutualFunds

const addMutualFunds = async (req, res) => {
  const response = await axios.get(url)
  const results = response.data
  let funds = []

  results.forEach((result) => {
    let fund_data = {
      symbol: result['symbol'],
      name: result['name'],
      currency: result['currency'],
      stockExchange: result['stockExchange'],
    }
    funds.push(fund_data)
  })

  // add funds from api call into DB
  const funds_data = await MutualFund.bulkCreate(funds)
  res.status(200).send(funds_data)
}

const getAllMutualFunds = async (req, res) => {
  let mutualFunds = await MutualFund.findAll({
    include: db.MutualFundRecords,
  })
  res.status(200).send(mutualFunds)
}

const getOneMutualFund = async (req, res) => {
  let symbol = req.params.symbol
  let results = await MutualFund.findOne({
    where: { symbol: symbol },
    include: db.MutualFundRecords,
  })
  console.log('ID', results['id'])
  res.status(200).send(results)
}

const getFundId = async (req, res) => {
  let symbol = req.params.symbol
  let results = await MutualFund.findOne({
    where: { symbol: symbol },
  })
  let fund_id = results['id']
  res.status(200).send(fund_id)
}

// export all the controller functions
module.exports = {
  addMutualFunds,
  getAllMutualFunds,
  getOneMutualFund,
  getFundId,
}
