import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { processOrder } from '../services/api';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: '',
    });
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await processOrder(formData);
            history.push('/confirmation');
        } catch (err) {
            setError('Failed to process order. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Payment Method</label>
                    <select
                        name="paymentMethod"
                        className="form-control"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Complete Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;