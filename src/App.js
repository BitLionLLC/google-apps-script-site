import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MonthlyExpensesTracker from './components/privacy-policies/monthlyExpensesTracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/privacy-policy/monthly-expenses-tracker" element={<MonthlyExpensesTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
