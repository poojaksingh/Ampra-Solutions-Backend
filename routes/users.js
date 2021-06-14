const express = require("express");
const router = express.Router();
const { Users } = require("../models/users");
const { cipherText, decipherText } = require("../middleware/bcryption");

// Login API
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await Users.findOne({ email: email });

  if (user) {
    let passwordCheck = await decipherText(password, user.password);

    if (passwordCheck) {
      // Correct Credentials
      res.json({
        status: 200,
        user: user,
        message: "Success",
      });
    } else {
      // Password Incorrect
      res.json({
        status: 401,
        message: "Password Incorrect!",
      });
    }
  } else {
    // User Does Not Exist
    res.json({
      status: 404,
      message: "Invalid Credentials!",
    });
  }
});
// Register API
router.post("/register", async (req, res) => {
  let { fname, lname, email, password } = req.body;
  let user = await Users.findOne({ email: email });

  if (user) {
    // User Already Exist !
    res.json({
      status: 409,
      message: "User Already Exist!",
    });
  } else {
    // User Registered Successfully !
    let hash = await cipherText(password);

    let instance = new Users({
      first_name: fname,
      last_name: lname,
      email: email,
      password: hash,
      
    });
    let results = await instance.save();
    //  await Users.create({
    //   first_name: fname,
    //   last_name: lname,
    //   email: email,
    //   password: hash,
    // })

    res.json({
      status: 200,
      user: results,
      message: "User Registered Successfully",
    });
  }
});


module.exports = router;
