
import './App.css';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './components/Utilities/NotFound';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
