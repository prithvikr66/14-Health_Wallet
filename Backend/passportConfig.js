import { Strategy as LocalStrategy } from "passport-local";
import userModel from "./models/User.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcryptjs";

const initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await userModel.findOne({ email: email });
          if (!user) {
            return done(null, false, { message: "User does not exist" });
          }
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return done(null, false, { message: "Incorrect password" });
          }
          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "214151504346-t18sfn6lqmsio920foqunm9g38s124ro.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: `http://localhost:4000/api/v1/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await userModel.findOne({
            email: profile.emails[0].value,
          });
          if (!user) {
            const newUser = await userModel.create({
              email: profile.emails[0].value,
              password: "google_password", // Consider using a generated password.
              name: profile.displayName,
              provider: "google",
            });
            return done(null, newUser);
          }
          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};

export { initializingPassport, isAuthenticated };
