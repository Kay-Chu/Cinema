
import './App.css';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home/home';
import { Welcome } from './components/welcome/welcome';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Router>
  );
}

export default App;
