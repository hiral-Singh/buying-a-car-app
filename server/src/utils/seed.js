const mongoose = require('mongoose');
const Car = require('../models/Car');
const User = require('../models/User');
const Order = require('../models/Order');

const seedCars = [
    {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 24000,
        description: 'Reliable and fuel-efficient sedan.',
        imageUrl: 'https://example.com/toyota-camry.jpg'
    },
    {
        make: 'Honda',
        model: 'Civic',
        year: 2021,
        price: 22000,
        description: 'Compact car with sporty handling.',
        imageUrl: 'https://example.com/honda-civic.jpg'
    },
    {
        make: 'Ford',
        model: 'Mustang',
        year: 2022,
        price: 35000,
        description: 'Iconic sports car with powerful performance.',
        imageUrl: 'https://example.com/ford-mustang.jpg'
    }
];

const seedUsers = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123'
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password456'
    }
];

const seedOrders = [
    {
        userId: '60d5ec49f1b2c8b1f8c8e4a1',
        carId: '60d5ec49f1b2c8b1f8c8e4a2',
        totalPrice: 24000,
        orderDate: new Date()
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await Car.deleteMany({});
        await User.deleteMany({});
        await Order.deleteMany({});

        await Car.insertMany(seedCars);
        await User.insertMany(seedUsers);
        await Order.insertMany(seedOrders);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();