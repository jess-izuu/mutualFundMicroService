module.exports = (sequelize, DataTypes) => {
  const MutualFundRecord = sequelize.define('mutualFundRecord', {
    id: {
      // the id will be our primary key for accessing mutual fund data
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    changesPercentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    change: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    dayLow: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    dayHigh: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    yearHigh: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    yearLow: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    marketCap: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    priceAvg50: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    priceAvg200: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    avgVolume: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    exchange: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    open: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    previousClose: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    eps: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    pe: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    earningsAnnouncement: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sharesOutstanding: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mutualFundId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  })

  return MutualFundRecord
}
