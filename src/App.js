import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
      </Routes>
    </Router>
  );
}
export default App;