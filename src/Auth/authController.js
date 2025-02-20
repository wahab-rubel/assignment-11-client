import React from "react";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password!" });
      }

      
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err || !result) {
          return res.status(401).json({ message: "Auth failed!" });
        }

        
        const token = jwt.sign(
          {
            email: user.email,
            id: user.id 
          },
          process.env.JWT_KEY, // 🔥 
          { expiresIn: "1h" }
        );

        res.status(200).json({
          message: "Login successful!",
          token: token
        });
      });
    })
    .catch(err => res.status(500).json({ error: err }));
};
