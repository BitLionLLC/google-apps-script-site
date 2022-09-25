import React from 'react';
import { Link } from 'react-router-dom';

const MonthlyExpensesTracker = () => {
    return (
        <div>
            <h1>Monthly Expenses Tracker</h1>
            <p>
                Monthly Expenses Tracker is a Google Apps Script application, 
                developed by BitLion, LLC.
            </p>
            <p>
                We don't collect or store your data.
            </p>
            <p>
                We need authorization of one Google API scope,
            </p>
            <span className="code">https://www.googleapis.com/auth/spreadsheets</span>
            <p>
                which lets us "See, edit, create, and delete all your Google Sheets spreadsheets".
            </p>
            <p>
                In reality, we're only editing the spreadsheet which the scripts are attached to,
                the Monthly Expenses Tracker template. You can verify this by clicking on the
                Extensions menu in the template in Google Drive and clicking on Apps Script
                so you can read the scripts yourself.
            </p>
            <p>
                For instance, the only sheet ever accessed, the active one, is accessed by
            </p>
            <span className="code">var activeSht = SpreadsheetApp.getActiveSheet();</span>
            <p>
                Only the cells with black backgrounds and white text are being updated by scripts.
            </p>
            <p>
                The scripts are run on Google's servers. You need to have a Google account in order
                to use the template and run the scripts. Google's use of your data is described in&nbsp;
                <a href='https://www.google.com/policies/privacy/'>Google's Privacy Policy.</a>
            </p>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}

export default MonthlyExpensesTracker;