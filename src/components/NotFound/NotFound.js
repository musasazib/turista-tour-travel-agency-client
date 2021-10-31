import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="error">Error Page</h1>
            <div className="error-text-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>We’re unable to find a page you are looking for, Try later or click the button.</p>
            </div>
            <Link to="/home">
                <button className="btn btn-style mt-5">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;