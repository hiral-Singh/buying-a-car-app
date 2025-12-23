import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarDetails } from '../services/api';
import './CarDetails.css';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const data = await getCarDetails(id);
                setCar(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="car-details">
            {car ? (
                <>
                    <h1>{car.make} {car.model}</h1>
                    <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Price:</strong> ${car.price}</p>
                    <p><strong>Description:</strong> {car.description}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </>
            ) : (
                <p>Car not found.</p>
            )}
        </div>
    );
};

export default CarDetails;