const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find().populate('uploader', 'name');
  res.json(items);
});

// Add new item
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json({ msg: 'Item listed' });
});

module.exports = router;
