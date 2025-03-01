/*const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbname = "dev201";
const JWT_SECRET = "votre_secret"; // Replace with a secure secret
const PORT = 82;

const app = express();
app.use(express.json());

// MongoDB connection
MongoClient.connect(url)
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db(dbname);

    // Middleware to check if the user is an admin
    const checkAdmin = async (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

      if (!token) {
        return res.status(401).json({ err: true, message: "No token provided" });
      }

      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') {
          return res.status(403).json({ err: true, message: "Access forbidden: Admins only" });
        }
        next(); // Allow the request to proceed
      } catch (err) {
        res.status(401).json({ err: true, message: "Invalid token" });
      }
    };

    // Admin registration route (only accessible by admin)
    app.post("/admin/register", checkAdmin, async (req, res) => {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          err: true,
          message: "Email and password are required",
        });
      }

      try {
        // Check if the email already exists in the database
        const existingUser = await db.collection("user").findOne({ email });
        if (existingUser) {
          return res.status(400).json({
            err: true,
            message: "Email is already registered",
          });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await db.collection("user").insertOne({
          email,
          password: hashedPassword,
          role: "user", // Regular user role
        });

        res.status(201).json({
          err: false,
          message: "User registered successfully",
        });
      } catch (err) {
        res.status(500).json({
          err: true,
          message: "Error registering user",
        });
      }
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });*/
