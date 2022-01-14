// require the db created in the index file
const { default: axios } = require('axios')
const db = require('../models/index')
const url =
  'https://financialmodelingprep.com/api/v3/quotes/mutual_fund?apikey='

const MutualFund = db.MutualFundCps

const addMutualFunds = async (req, res) => {
  const response = await axios.get(url)
  const results = response.data
  let funds = []

  results.forEach((result) => {
    let fund_data = {
      symbol: result['symbol'],
      name: result['name'],
      price: result['price'],
      changesPercentage: result['changesPercentage'],
      change: result['change'],
      dayLow: result['dayLow'],
      dayHigh: result['dayHigh'],
      yearHigh: result['yearHigh'],
      yearLow: result['yearLow'],
      marketCap: result['marketCap'],
      priceAvg50: result['priceAvg50'],
      priceAvg200: result['priceAvg200'],
      volume: result['volume'],
      avgVolume: result['avgVolume'],
      exchange: result['exchange'],
      open: result['open'],
      previousClose: result['previousClose'],
      eps: result['eps'],
      pe: result['pe'],
      earningsAnnouncement: result['earningsAnnouncement'],
      sharesOutstanding: result['sharesOutstanding'],
      timestamp: result['timestamp'],
    }
    funds.push(fund_data)
  })

  // add funds from api call into DB
  const funds_data = await MutualFund.bulkCreate(funds)
  res.status(200).send(funds_data)
}

const getAllMutualFunds = async (req, res) => {
  let mutualFunds = await MutualFund.findAll({})
  res.status(200).send(mutualFunds)
}

const getOneMutualFund = async (req, res) => {
  let symbol = req.params.symbol
  let results = await MutualFund.findOne({ where: { symbol: symbol } })
  res.status(200).send(results)
}

// export all the controller functions
module.exports = {
  addMutualFunds,
  getAllMutualFunds,
  getOneMutualFund,
}
