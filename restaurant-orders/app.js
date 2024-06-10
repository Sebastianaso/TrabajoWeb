const express = require('express');
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use('/orders', ordersRouter);
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});