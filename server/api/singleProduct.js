const router = require("express").Router();
const {
  models: { Products },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res) => {
  try {
    const SingleProductId = req.params.id;

    const SingleProduct = await Products.findOne({
      where: { id: SingleProductId },
    });

    res.send(SingleProduct);

    if (!SingleProduct) {
      return res.status(404).send("SingleProduct not found");
    }
  } catch (error) {
    console.log(error);
  }
});
