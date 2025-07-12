const express = require('express');
const router = express.Router();
const { db } = require('../firebase/firebaseConfig');

// GET /api/admin/items/pending
router.get('/items/pending', async (req, res) => {
try {
const snapshot = await db.collection('items').where('status', '==', 'pending').get();
const items = [];
snapshot.forEach(doc => {
items.push({ id: doc.id, ...doc.data() });
});
res.status(200).json(items);
} catch (error) {
res.status(500).json({ error: 'Failed to fetch pending items' });
}
});

// POST /api/admin/items/:id/approve
router.post('/items/:id/approve', async (req, res) => {
const { id } = req.params;
try {
await db.collection('items').doc(id).update({ status: 'approved' });
res.json({ message: 'Item approved' });
} catch (error) {
res.status(500).json({ error: 'Approval failed' });
}
});
// POST /api/admin/items/:id/reject
router.post('/items/:id/reject', async (req, res) => {
const { id } = req.params;
try {
await db.collection('items').doc(id).update({ status: 'rejected' });
res.json({ message: 'Item rejected' });
} catch (error) {
res.status(500).json({ error: 'Rejection failed' });
}
});

module.exports = router;