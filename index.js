const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to Home Library!');
});

app.listen(port, () => {
	console.log(`Home Library app listening on port ${port}`);
});
