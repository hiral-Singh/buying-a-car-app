import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCars } from '../services/api';
import CarCard from '../components/CarCard';
import Pagination from '../components/Pagination';

const SearchResults = () => {
    const { query } = useParams();
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(10);
    const [totalCars, setTotalCars] = useState(0);

    useEffect(() => {
        const getCars = async () => {
            const response = await fetchCars(query);
            setCars(response.data);
            setTotalCars(response.total);
        };
        getCars();
    }, [query]);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <h1>Search Results for "{query}"</h1>
            <div className="row">
                {currentCars.map(car => (
                    <div className="col-md-4" key={car.id}>
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
            <Pagination
                carsPerPage={carsPerPage}
                totalCars={totalCars}
                paginate={paginate}
            />
        </div>
    );
};

export default SearchResults;