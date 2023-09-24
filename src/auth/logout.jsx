// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the user's authentication state (remove the token from localStorage)
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/login');
    });

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;