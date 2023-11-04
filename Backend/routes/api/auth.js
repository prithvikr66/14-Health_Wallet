import passport from "passport";
import bcrypt from "bcryptjs";
import User from "../../models/User.js";
import express from "express";
import { initializingPassport } from "../../passportConfig.js";

initializingPassport(passport);

const router = express.Router();

// Registration controller
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(401).send("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // req.session.user = newUser;

    const user = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user?._id,
        name: user?.name,
        username: user?.username,
      },
    });
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

// Login controller
router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) return res.status(401).send({ errors: "User does not exist" });
    req.logIn(user, async (err) => {
      if (err) throw err;
      const userWithoutPassword = await User.findOne({
        email: user.email,
      }).select("-password");
      res
        .status(201)
        .json({
          message: "Successfully Authenticated",
          user: userWithoutPassword,
        });
    });
  })(req, res, next);
});

router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).json({
        message: "Error during logout",
      });
    }
    req.session.destroy(function (err) {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({
          message: "Error destroying session",
        });
      }
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.status(200).json({
        message: "Logged out successfully",
      });
    });
  });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google"),
  async function (req, res) {
    res.redirect("http://localhost:5173");
    // frontend URL endpoint i.e profile page , full URL res.redirect()
  }
);

export default router;
