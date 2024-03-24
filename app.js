
const express = require("express");
const productEn = require("./mail/productEN");
const partnershipEn = require("./mail/partnershipEn");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.post("/send-enquiry-product", (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      cname,
      productofinterest,
      quantity,
      question,
    } = req.body;
    productEn(
      name,
      email,
      contact,
      cname,
      productofinterest,
      quantity,
      question
    );
    res.status(200).json({
      succss: true,
      msg: "Thank you for your enquiry! It has been successfully sent.",
    });
  } catch (error) {
    res.status(500).json({ succss: false, msg: error.message });
  }
});
app.post("/send-enquiry-partnership", (req, res) => {
  try {
    const { name, email, cnumber, cname, nature, description, question } =
      req.body;
    partnershipEn(name, email, cnumber, cname, nature, description, question);
    res.status(200).json({
      succss: true,
      msg: "Thank you for your enquiry! It has been successfully sent.",
    });
  } catch (error) {
    res.status(500).json({ succss: false, msg: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
