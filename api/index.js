


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const path = require("path");
const EventEmitter = require("events");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const clientid = "888467574492-earl11br5f1p5q5evh87kd15fg07nm6n.apps.googleusercontent.com"
const clientsecret = "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"

require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "bksdfb2h832h8932";

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(session({
  secret: "67532587837257892ghjgfegefj",
  resave: false,
  saveUninitialized: true
}))

mongoose.connect(process.env.MONGO_URL);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: clientid,
    clientSecret: clientsecret,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.name,
            email: profile.emails[0].value,
            image: profile.photos[0].value
          });

          await user.save();
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:5173/",
  failureRedirect: "http://localhost:5173/login"
}))

app.get("/login/success", async (req, res) => {

  if (req.user) {
    res.status(200).json({ message: "user Login", user: req.user })
  } else {
    res.status(400).json({ message: "Not Authorized" })
  }
})

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err) }
    res.redirect("http://localhost:5173");
  })
})

EventEmitter.defaultMaxListeners = 15;

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        reject(err);
      } else {
        resolve(userData);
      }
    });
  });
}

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      role: "user", // Set role to 'user' for regular user registration
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// Login route for regular users
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email: email, role: "user" });

    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);

      if (passOk) {
        jwt.sign(
          {
            email: userDoc.email,
            id: userDoc._id,
            role: userDoc.role, // Add role to the token payload
          },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(userDoc);
          }
        );
      } else {
        res.status(422).json("Password is incorrect");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // If the user is not found, return an error
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Save the reset token and its expiration time in the user's document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in one hour
    await user.save();

    // Create a nodemailer transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL, // Your Gmail email address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Create the email content
    const mailOptions = {
      from: "jiitinsights2023@gmail.com", // Sender email address
      to: user.email, // Recipient email address
      subject: "Password Reset",
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                ${process.env.CLIENT_URL}/reset-password/${resetToken}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending reset email:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // If the email is sent successfully, respond with a success message
      res.json({ success: true, message: "Password reset email sent" });
    });
  } catch (error) {
    console.error("Error handling forgot password request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user-role/:email", (req, res) => {
  const { email } = req.params;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ role: user.role });
});

// Route for updating password
app.post("/update-password", async (req, res) => {
  try {
    const { email, password, userRole } = req.body;

    // Retrieve user from the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check user role and update password based on the role
    if (user.role === "admin") {
      if (userRole === "adminPassword") {
        // Update admin password logic
        user.adminPassword = password;
      } else {
        return res.status(400).json({ error: "Invalid user role for admin" });
      }
    } else if (user.role === "user") {
      if (userRole === "password") {
        // Update user password logic
        user.password = password;
      } else {
        return res.status(400).json({ error: "Invalid user role for user" });
      }
    } else {
      return res.status(400).json({ error: "Invalid user role" });
    }

    // Save the updated password
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error("JWT verification error:", err);
        return res.status(403).json({ error: "Unauthorized" });
      }

      const user = await User.findById(userData.id);

      if (user) {
        const { _id, role, userName, name, email } = user;

        if (role === "admin" && userName) {
          return res.json({ _id, role, userName });
        } else if (role === "user" && name && email) {
          return res.json({ _id, role, name, email });
        } else {
          return res.status(404).json("Invalid User");
        }
      } else {
        return res.status(404).json("User not found");
      }
    });
  } else {
    res.json(null);
  }
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, jwtSecret, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }

    try {
      // You may not need to find the user by ID for logout
      // Just attach the decoded user information to the request object
      req.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}

app.post("/logout", authenticateToken, async (req, res) => {
  try {
    // Clear the token in the cookie
    res.cookie("token", "").json(true);
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({
      code: 403,
      message: "Unauthorized",
    });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        code: 401,
        message: "Invalid token",
      });
    }

    req.decoded = decoded;
    next();
  });
};

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
