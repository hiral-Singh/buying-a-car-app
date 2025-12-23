const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Route to get all cars
router.get('/', carController.getAllCars);

// Route to get a car by ID
router.get('/:id', carController.getCarById);

// Route to create a new car
router.post('/', carController.createCar);

// Route to update a car by ID
router.put('/:id', carController.updateCar);

// Route to delete a car by ID
router.delete('/:id', carController.deleteCar);

module.exports = router;