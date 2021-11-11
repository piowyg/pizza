import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const css = `
    .redirect {
        margin-top: 20px;
    }`
    
    return (
        <div className="error_page">
        <h2>Nie ma takiej strony</h2>
        <div className="redirect">
            <style>{css} </style>
            Zachęcam gorąco do powrotu do <Link to="/">strony głównej</Link>
        </div>
        </div>
    );
}

export default ErrorPage;