const express = require('express');
const router = express.Router();
const { admin } = require('../firebase-config');

// Sign up user
router.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password, displayName: name });
    res.status(201).json({ uid: user.uid });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login - Client should handle using Firebase JS SDK
module.exports = router;
