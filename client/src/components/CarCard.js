import React from 'react';
import PropTypes from 'prop-types';
import './CarCard.css'; // Assuming you have a CSS file for styling

const CarCard = ({ car }) => {
    return (
        <div className="card">
            <img src={car.imageUrl} className="card-img-top" alt={car.make + ' ' + car.model} />
            <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <p className="card-text">Price: ${car.price}</p>
                <p className="card-text">Year: {car.year}</p>
                <p className="card-text">Mileage: {car.mileage} miles</p>
                <a href={`/cars/${car.id}`} className="btn btn-primary">View Details</a>
            </div>
        </div>
    );
};

CarCard.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.string.isRequired,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        mileage: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarCard;