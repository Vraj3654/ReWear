const express = require('express');
const router = express.Router();
const { db } = require('../firebase-config');

// Add a new item
router.post('/list-item', async (req, res) => {
  try {
    const item = req.body;
    const docRef = await db.collection('items').add(item);
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get items
router.get('/items', async (req, res) => {
  try {
    const snapshot = await db.collection('items').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
