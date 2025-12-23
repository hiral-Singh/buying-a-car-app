import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../services/auth';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profileData = await getUserProfile();
                setUser(profileData);
            } catch (err) {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(user);
            history.push('/'); // Redirect to home after successful update
        } catch (err) {
            setError('Failed to update profile');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>User Profile</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;