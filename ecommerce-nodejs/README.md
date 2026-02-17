# Flowise E-Commerce (Node.js)

An e-commerce website built with **Node.js**, **Express**, and **EJS**.

## Features
- Product listing page with Bootstrap styling
- REST API for products (`/products`)
- Responsive design

## Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/kasivishwanathanthirumalaisankar-cmyk/flowise-automation.git
   cd flowise-automation/ecommerce-nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open the browser:
   Visit [http://localhost:3000](http://localhost:3000).

## API Endpoints
- **GET** `/products` - Returns a list of products.

## Project Structure
- **`server.js`** - Backend logic
- **`views/index.ejs`** - Product listing page
- **`public/index.html`** - API testing page

## Next Steps
- Add a database (MongoDB, PostgreSQL)
- Implement user authentication
- Add cart functionality
- Deploy to a hosting service (Render, Vercel, etc.)