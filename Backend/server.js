import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import { initializingPassport } from "./passportConfig.js";
import connectDB from "./data/database.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 4000;
const app = express();

initializingPassport(passport);

// Connecting database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// Routes
import authRoutes from "./routes/api/auth.js";
// import userRoutes from "./routes/api/user";
// import reviewsRoutes from "./routes/api/reviews.js";
// import moviesRoutes from "./routes/api/movies.js";

app.use('/api/v1/auth', authRoutes);
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/reviews", reviewsRoutes);
// app.use("/api/v1/movies", moviesRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server started at ${PORT} `));
