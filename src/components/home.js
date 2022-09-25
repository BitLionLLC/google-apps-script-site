import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>About this site</h1>
            <p>
                This site describes the privacy policies of BitLion, LLC's Google
                Apps Script applications.
            </p>
            <h2>Privacy Policies</h2>
            <ul>
                <li>
                    <Link to="/privacy-policy/monthly-expenses-tracker">Monthly Expenses Tracker</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;