require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());    
app.use(express.json());

app.get('/', (req, res) => res.send('ReWear API with Firebase'));

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));