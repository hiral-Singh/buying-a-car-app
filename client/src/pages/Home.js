import React, { useEffect, useState } from 'react';
import { getCars } from '../services/api';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Home = () => {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            const data = await getCars();
            setCars(data);
        };
        fetchCars();
    }, []);

    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    // return (
    //     <div className="container">
    //         <h1 className="mt-4">Welcome to the Car Buying App</h1>
    //         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    //         <div className="row">
    //             {currentCars.map(car => (
    //                 <div className="col-md-4" key={car.id}>
    //                     <CarCard car={car} />
    //                 </div>
    //             ))}
    //         </div>
    //         <Pagination 
    //             carsPerPage={carsPerPage} 
    //             totalCars={filteredCars.length} 
    //             paginate={paginate} 
    //             currentPage={currentPage} 
    //         />
    //     </div>
    // );


    return (
  <div style={{ padding: "40px" }}>
    <h1>HOME IS RENDERING</h1>
    <p>Total cars: {cars.length}</p>
  </div>
);
};

export default Home;