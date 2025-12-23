import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// Function to fetch all cars
export const fetchCars = async () => {
    try {
        const response = await axios.get(`${API_URL}/cars`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching cars: ' + error.message);
    }
};

// Function to fetch car details by ID
export const fetchCarDetails = async (carId) => {
    try {
        const response = await axios.get(`${API_URL}/cars/${carId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching car details: ' + error.message);
    }
};

// Function to search for cars based on criteria
export const searchCars = async (searchCriteria) => {
    try {
        const response = await axios.post(`${API_URL}/cars/search`, searchCriteria);
        return response.data;
    } catch (error) {
        throw new Error('Error searching for cars: ' + error.message);
    }
};

// Function to create a new order
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};