const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "MASHALMAQSOOD";
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    // password must be at least 5 chars long
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // console.log("request", req);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .send({ error: "User with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
