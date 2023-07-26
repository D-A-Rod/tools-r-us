const router = require("express").Router();
const {
  models: { Products },
} = require("../db");
module.exports = router;

router.get("/", async (req, res) => {
  try {
    const allProducts = await Products.findAll();
    res.json(allProducts);
  } catch (error) {
    res.status(500).send(`Oops, Something went wrong ${error}`);
  }
});
