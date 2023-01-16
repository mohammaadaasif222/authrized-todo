const express = require("express");
const signInRouter = express.Router();
const Users = require("../Users");

const passport = require("passport");
const jwt = require("jsonwebtoken");

// to define how authentication will work
const JwtStretgy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretKey",
};

passport.use(
  new JwtStretgy(options, function (jwt_payload, done) {
    if (
      jwt_payload.email === "kasifsaif784@gmail.com" &&
      jwt_payload.password === "mohamamd"
    ) {
      return done(null, true);
    } else {
      return done(null, false);
    }
  })
);

signInRouter.post("/signin", (req, res) => {
  if (Users.find((item) => item.email === req.body.email)) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    console.log("succesfully signin");
    const token = jwt.sign(user, options.secretOrKey);
    res.json({ token });
  } else {
    console.log("please sign up")
  }

  // creating the token
});
// autherisation
signInRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "Access granted" });
  }
);

module.exports = signInRouter;
