import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const SummaryPage = () => {

    const dispatch = useDispatch();

    const redirectToSummary = useSelector((state) => state.redirectToSummary.state);

    const css = `
    .redirect {
        margin-top: 20px;
    }`
    
    if (!redirectToSummary) {
        return (
            <div className="error_page">
            <h2>Jescze nic nie zamówiłeś :(</h2>
            <div className="redirect">
                <style>{css} </style>
                Zachęcam gorąco do powrotu do <Link to="/">strony głównej</Link>
            </div>
            </div>
        );
    } else {
        return (
            <div className="error_page">
            <h2>Dziekujemy za zamówienie</h2>
            <img className="boxdel-gif" src="/boxdel.gif" alt="Thanks for order"/>
            <div className="redirect">
                <style>{css} </style>
                Zachęcam gorąco do powrotu do <Link to="/">strony głównej</Link>
            </div>
            </div>
        );
    }
}

export default SummaryPage;