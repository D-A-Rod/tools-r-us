const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  availible: {
    type: Sequelize.BOOLEAN,
    //allowNull: false
    
  },
  imageUrl: {
    type: Sequelize.TEXT,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg9bWAgkcAb6jGp1bug2cz7qBGTsaYtpVOQ&usqp=CAU"
  },
  productType: {
    type: Sequelize.STRING,
    allowNull: false
  },

})

module.exports = Products