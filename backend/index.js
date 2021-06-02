const express = require('express');
const cors = require('cors');
const newsRoute = require('./routes/news')
const bodyParser = require('body-parser');
const topicRoutes = require('./routes/topic')

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/topic', topicRoutes)
app.use('/news', newsRoute);

app.listen(5500, () => console.log("The server is running at PORT 5500"));