const express = require('express');

//esto es nuevo para poder conectar la bd con ejs, y mandar el link correspondiente de la pagina
const path = require('path'); 
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// Configuración del motor de vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Ruta para renderizar el archivo index.ejs
app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.use(bodyParser.json());
app.use('/orders', ordersRouter);
app.listen(PORT, () => {
 console.log(`Server is running on http://LocalHost:${PORT}`);


});