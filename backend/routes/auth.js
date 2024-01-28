const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

//generating a json web tokken:
const JWT_SECRET = "Hello, How are you";

//ROUTE 1: Create a User using: POST "/api/auth/createuser"
//doesn't require auth(authentication): No login required.

router.post(
  "/createuser",
  [
    body("email", "Enter a valid email.").isEmail(), //sending custom msg
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = true;
    //   obj = {
    //     a: "thios",
    //     number: 34,
    //   };
    // //how to recieve data from request:
    // console.log(req.body);
    // //how to create the user schema:
    // const user = User(req.body);
    // //saving user in db
    // user.save();

    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    //using try catch in case of error came
    try {
      // check whether the user with this email exists already:
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }
      //hashing and adding salt to the password:
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //returns a promise:
      //Create a new user:
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // .then((user) => res.json(user))
      // //how to send data in request body:
      // // res.send(req.body);

      // .catch((err) => {
      //   console.log(err);
      //   res.json({
      //     error: "Please enter a unique value for email.",
      //     message: err.message,
      //   });
      // });

      const data = {
        // id: user.id,
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET); //returns a promise
      // console.log(authToken);

      // res.json(user);
      res.json({ success, authToken });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Internal Server Error Occured.");
    }
  }
);
//   res.send("Hellooo!");

//how to send data as response
//   res.json(obj);

//ROUTE 2: Authenticate a User using: POST "/api/auth/login"
//doesn't require auth(authentication): No login required.
router.post(
  "/login",
  [
    //check if email is valid or not:
    body("email", "Enter a valid email.").isEmail(), //sending custom msg
    body("password", "Password cannot be blank.").exists(), //sending custom msg
  ],
  async (req, res) => {
    let success = true;
    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success == false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET); //returns a promise

      // res.json(user);

      res.json({ success, authToken });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Internal Server Error Occured.");
    }
  }
);

//ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser"
//does require auth(authentication): Login required.
router.post("/getuser", fetchuser, async (req, res) => {
  console.log(req);
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured.");
  }
});

// router.post(
//   "/login",
//   [
//     //check if email is valid or not:
//     body("email", "Enter a valid email.").isEmail(), //sending custom msg
//     body("password", "Password cannot be blank.").exists(), //sending custom msg
//   ],
//   async (req, res) => {
//     //if there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         return res
//           .status(400)
//           .json({ error: "Please try to login with correct credentials" });
//       }
//       const passwordCompare = await bcrypt.compare(password, user.password);
//       if (!passwordCompare) {
//         return res
//           .status(400)
//           .json({ error: "Please try to login with correct credentials" });
//       }
//       const data = {
//         user: {
//           id: user.id,
//         },
//       };
//       const authToken = jwt.sign(data, JWT_SECRET); //returns a promise

//       // res.json(user);
//       res.json({ authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error Occured.");
//     }
//   }
// );

module.exports = router;
