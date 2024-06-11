const mysql = require('mysql');
const mysql = require('mysql');
const app = express();


const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'restaurant'
});


connection.connect((err) => {
 if (err) {
 console.error('Error connecting to the database:', err);
 return
}
 console.log('Connected to the MySQL database.');
});

// Ruta para manejar el envío del formulario y realizar la inserción en la base de datos
app.post('/realizar-pedido', (req, res) => {
    const { tableNumber, items } = req.body;
  
    // Insertar los datos en la base de datos
    const query = 'INSERT INTO pedidos (numero_mesa, items) VALUES (?, ?)';
    connection.query(query, [tableNumber, items], (err, results) => {
      if (err) {
        console.error('Error al insertar datos en la base de datos:', err);
        res.status(500).send('Error al realizar el pedido');
        return;
      }
      console.log('Pedido registrado en la base de datos');
      res.status(200).send('Pedido realizado correctamente');
    });
  });
  
module.exports = connection;