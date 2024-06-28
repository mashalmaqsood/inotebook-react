const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    // password must be at least 5 chars long
    body("name",'enter a valid name').isLength({ min: 3 }),
    body("password","password must be atleast 5 characters").isLength({ min: 5 }),
  ],
  (req, res) => {
    // console.log("request", req);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch(err => {
        console.log(err)
        res.json({error : "Please enter a unique value for email", message : err.message})
      });
  }
);

module.exports = router;
