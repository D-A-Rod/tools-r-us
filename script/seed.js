'use strict'

const {db, models: {User, Products} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  const products = await Promise.all([
    Products.create(
    { name: "MiterSaw", 
    description: "Making agnle/miter cuts",
    price: "1000",
    available: true,
    imageUrl: 'https://www.toolmarts.com/pub/media/catalog/product/cache/7ef6b049ff4d7103e1a7cf103c80b437/d/w/dws780-hpt-lg.jpg',
    productType: 'Construction'
  },
  Products.create({
    name: "Drills",
    description: "Ditch the screw driver rent the drill",
    price: "50",
    available: true,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnINEMmuf0UyKpwMO1j-vI6mW6GnwmieyneA&usqp=CAU',
    productType: 'Construction'
  }),
  Products.create({
    name: "Ladder",
    description: "Too high to reach? Here is a helping hand to give you a boost",
    price: "1000",
    available: true,
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgS2zSBKpKHiFh6rg4liP0YzkHUYpPv4TAeObL09-2NfRmE-5__fdvKwFuNSP--zGBurlsOfsQHIVcrs1oi7grF0OnvxyXjwv9Rs04yfLp1yJt8km8IGpR&usqp=CAc',
    productType: 'Misc'
  }),
  Products.create({
    name: "WireCutter",
    description: "Cut through any wire with these bad boys",
    price: "10",
    available: true,
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHn7xS3sgjFgIIiBGzaimqHqm7AEbyWbrOtjophQcsk1DsO2FwgzfC0xN-_oMEbdpXXAaukwBb9RgG_DLViMZ7V0z-xhtn-yNqN4yrTmTDnvwzdd2G77KL1Q&usqp=CAc',
    productType: 'Electrical'
  }),
  Products.create({
    name: "PVCpipe",
    description: "Got a leak? Maybe a new pipe will get it fixed",
    price: "1000",
    available: true,
    imageUrl: 'https://m.media-amazon.com/images/I/518j5POdTdL._AC_SX679_.jpg',
    productType: 'plumbing'
  }),
  ),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    products: {
      MiterSaw: products[0],
      Drills: products[1],
      Lddder: products[2],
      WireCutters: products[3],
      PVCpipe: products[4],


    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
