const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middlewares/auth-middleware');
const newsRoute = require('./routes/news')
const app = express();

app.use(cors());

app.use('/', authMiddleware);

app.use('/news', newsRoute);

app.listen(8080, () => console.log("The server is running at PORT 8080"));