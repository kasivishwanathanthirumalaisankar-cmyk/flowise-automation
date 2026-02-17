const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mock database for products
const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, description: 'Noise-cancelling wireless headphones', category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 199.99, description: 'Fitness tracking smartwatch', category: 'Electronics' },
  { id: 3, name: 'Cotton T-Shirt', price: 19.99, description: 'Comfortable cotton t-shirt', category: 'Clothing' }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products });
});

app.get('/products', (req, res) => {
  res.json(products);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});