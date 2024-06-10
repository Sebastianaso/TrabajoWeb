const db = require('../db/connection');
const createOrder = (tableNumber, items, subtotal, total, callback) => {
 const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';
 db.query(sql, [tableNumber, JSON.stringify(items), subtotal, total], (err, result) => {
 if (err) {
 return callback(err);
 }
 callback(null, result.insertId);
 });
};
module.exports = {
 createOrder
};
