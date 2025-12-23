function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateCarSearchCriteria(criteria) {
    const { make, model, year, priceRange } = criteria;
    return (
        (make && typeof make === 'string') &&
        (model && typeof model === 'string') &&
        (year && !isNaN(year) && year > 1885 && year <= new Date().getFullYear()) &&
        (priceRange && typeof priceRange === 'object' && priceRange.min >= 0 && priceRange.max >= priceRange.min)
    );
}

function validateProfileUpdate(data) {
    const { name, email } = data;
    return (
        (name && typeof name === 'string' && name.trim() !== '') &&
        (email && validateEmail(email))
    );
}

export { validateEmail, validatePassword, validateCarSearchCriteria, validateProfileUpdate };