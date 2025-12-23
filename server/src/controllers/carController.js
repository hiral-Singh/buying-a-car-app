const Car = require('../models/Car');

// Fetch all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error });
    }
};

// Fetch a single car by ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching car', error });
    }
};

// Create a new car
exports.createCar = async (req, res) => {
    const newCar = new Car(req.body);
    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ message: 'Error creating car', error });
    }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(400).json({ message: 'Error updating car', error });
    }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting car', error });
    }
};