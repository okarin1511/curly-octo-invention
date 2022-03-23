const express = require('express');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, "../frontend/build")));

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Server started on port ${port}`));