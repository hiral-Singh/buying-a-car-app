import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Form onSubmit={handleSearch} className="search-bar">
            <Form.Group controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Search for cars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default SearchBar;