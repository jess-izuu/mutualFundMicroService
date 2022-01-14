const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// middlewares
app.use(express.json())

//mutual fund names with symbols and currency type
const fundRouters = require('./routes/mutualFundRouter.js')
app.use('/mutualfunds', fundRouters)

//mutual funds bought by users
const recordRouters = require('./routes/mutualFundRecordRouter.js')
app.use('/ownedFunds', recordRouters)

//mutual funds and their price data at the specific time
const timeRouters = require('./routes/mutualFundCpRouter.js')
app.use('/currentMutualFunds', timeRouters)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
