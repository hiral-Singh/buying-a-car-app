const Order = require('../models/Order');
const User = require('../models/User');
const Car = require('../models/Car');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, carId, quantity, totalPrice } = req.body;

        const order = new Order({
            user: userId,
            car: carId,
            quantity,
            totalPrice,
        });

        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('car');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// Get order details by order ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId).populate('car');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
};

// Update an order
exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};