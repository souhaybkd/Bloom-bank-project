import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Donor from './Pages/Donor';
import Request from './Pages/Request';
import BloodCollection from './Pages/BloodCollection';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/request" element={<Request />} />
        <Route path="/blood-collection" element={<BloodCollection />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
