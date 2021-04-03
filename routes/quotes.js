const express = require("express");
const router = express.Router();

const Pricing = require("../models/Pricing");
const DefaultPricing = require("../models/DefaultPricing");
const Quote = require("../models/Quote");

// @route   POST api/quote
// @desc    Post front-End body return quote
// @access  public
router.post("/", async (req, res) => {
  try {
    const centerID = req.body.center_id;
    const pricing = await Pricing.findOne({
      center_id: centerID,
    });
    const defaultPricing = await DefaultPricing.findOne();
    const productsInCart = req.body.products;
    const { name, email, DOB, center_name } = req.body;

    const newQuote = new Quote({
      products: [],
      total: 0,
      name,
      email,
      DOB,
      center_id: centerID,
      center_name,
    });

    productsInCart.map((product) => {
      if (pricing == null || pricing[product.name] == null) {
        (product.price = defaultPricing[product.name]);
      } else {
        (product.price = pricing[product.name])
      }
      newQuote.total += product.price * product.quantity;
      return {
        ...product,
      };
    });

    newQuote.products = productsInCart;

    const quote = await newQuote.save();
    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/quote
// @desc    Get ALL quotes
// @access  public
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({
      name: 1,
    });
    res.json(quotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
