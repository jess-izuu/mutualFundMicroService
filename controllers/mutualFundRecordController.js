// require the db created in the index file
const { default: axios } = require('axios')
const db = require('../models/index')

// get the mutual fund model
const MutualFund = db.MutualFundRecords

const MutualFunds = db.MutualFunds

const addMutualFunds = async (req, res) => {
  let symbol = req.params.symbol
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=`

  let results = await MutualFunds.findOne({
    where: { symbol: symbol },
  })
  let fundId = results['id']

  const response = await axios.get(url)
  const result = response.data

  let fund_data = {
    symbol: result[0]['symbol'],
    name: result[0]['name'],
    price: result[0]['price'],
    changesPercentage: result[0]['changesPercentage'],
    change: result[0]['change'],
    dayLow: result[0]['dayLow'],
    dayHigh: result[0]['dayHigh'],
    yearHigh: result[0]['yearHigh'],
    yearLow: result[0]['yearLow'],
    marketCap: result[0]['marketCap'],
    priceAvg50: result[0]['priceAvg50'],
    priceAvg200: result[0]['priceAvg200'],
    volume: result[0]['volume'],
    avgVolume: result[0]['avgVolume'],
    exchange: result[0]['exchange'],
    open: result[0]['open'],
    previousClose: result[0]['previousClose'],
    eps: result[0]['eps'],
    pe: result[0]['pe'],
    earningsAnnouncement: result[0]['earningsAnnouncement'],
    sharesOutstanding: result[0]['sharesOutstanding'],
    timestamp: result[0]['timestamp'],
    userId: req.body.userId,
    mutualFundId: fundId,
  }

  // add funds from api call into DB
  const bought_fund = await MutualFund.create(fund_data)
  res.status(200).send(bought_fund)
}

const getAllCustomersHoldings = async (req, res) => {
  let mutualFunds = await MutualFund.findAll({})
  res.status(200).send(mutualFunds)
}

const getOneCustomerHoldings = async (req, res) => {
  let id = +req.params.id
  let results = await MutualFund.findAll({ where: { userId: id } })
  res.status(200).send(results)
}

const updateUserId = async (req, res) => {
  // get the mutual fund and user
  let fund_id = +req.params.id
  let userId = +req.params.userId

  // find that mutual fund
  let result = await MutualFund.findOne({ where: { id: fund_id } })

  // update that mutual fund with the user id
  let updated_fund = {
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
    userId: userId,
  }

  const fund = await MutualFund.update(updated_fund, { where: { id: fund_id } })
  res.status(200).send(fund)
}

// export all the controller functions
module.exports = {
  addMutualFunds,
  getAllCustomersHoldings,
  getOneCustomerHoldings,
}
