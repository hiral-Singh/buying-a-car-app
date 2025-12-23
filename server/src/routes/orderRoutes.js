const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

// Create a new order
router.post('/', authMiddleware, orderController.createOrder);

// Get all orders for a user
router.get('/', authMiddleware, orderController.getUserOrders);

// Get a specific order by ID
router.get('/:id', authMiddleware, orderController.getOrderById);

// Update an order status
router.put('/:id', authMiddleware, orderController.updateOrderStatus);

// Delete an order
router.delete('/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;