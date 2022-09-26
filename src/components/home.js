import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>About this site</h1>
            <p>
                This site describes the workings of BitLion, LLC's Google
                Apps Script applications.
            </p>
            <h2>What the apps do with user data</h2>
            <p>
                These Google Apps Script applications written by BitLion, LLC do not access or store user data. The only 
                information accessed is the spreadsheet that the scripts are attached to. We need to be able to edit the cells
                in the spreadsheet where the scripts' functions are called. We do not modify any other cells, and we do
                not delete spreadsheets. Cells that are being calculated through our scripts are marked in the template
                with white text and a black background.
            </p>
            <p>
                When you make a copy of any of our templates, the attached scripts we've written get copied, too.
                You can verify the code in the scripts by accessing the Extensions menu &gt; Apps Script.
                You'll see that the script accesses the active spreadsheet with
            </p>
            <span className="code">var activeSht = SpreadsheetApp.getActiveSheet();</span>
            <p>
                This lets you know that we're only editing the spreadsheet that the scripts are attached to.
            </p>
            <h2>How our scripts enhance user functionality</h2>
            <p>
                What we've done is make templates that make your life easier. For instance, our expenses tracker
                takes a list of expenses and automatically calculates the paid status and the category of the expense
                based on the background color of those fields. We love when repetitive processes get automated,
                because it saves us time. We want the same for you when you use our templates.
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