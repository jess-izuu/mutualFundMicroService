// this file stores the "mutual fund" model (model is table schema in sequelize lingo)

// this is a function that would take the sequelize instance and DT Class
// and return a mutual fund model object

module.exports = (sequelize, DataTypes) => {
  // Define a new model, representing a table in the database.
  // modelName is 'mutual_fund' (first argument of define function)
  // When synced, this will create a table name of "modelName" + "s", i.e. "mutual_funds"

  const MutualFund = sequelize.define('mutualFund', {
    id: {
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
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stockExchange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  return MutualFund
}
