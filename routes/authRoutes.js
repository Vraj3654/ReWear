const express = require('express');
const router = express.Router();
const { db } = require('../firebase/firebaseConfig');

router.post('/signup', async (req, res) => {
const { name, email, password } = req.body;
const userRef = db.collection('users').doc();
await userRef.set({
name,
email,
password, // optionally hash this
points: 0,
isAdmin: false,
});
res.json({ message: 'User registered', id: userRef.id });
});

router.get('/users', async (req, res) => {
const snapshot = await db.collection('users').get();
const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
res.json(users);
});
module.exports = router;