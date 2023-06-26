import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <Router>
      {/* <Link to='/login'>Login</Link>
       <Link to='/registration'>Registration</Link> */}
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
    </Routes>
    </Router>
  );
};
export default App;
