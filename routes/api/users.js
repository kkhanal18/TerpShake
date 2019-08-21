const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("User route");
// });

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check(
      "password",
      "Please enter password with 5 or more characters"
    ).isLength({ min: 5 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);

module.exports = router;
