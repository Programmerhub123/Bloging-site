import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar/NavBar';
import Homepage from './Homepage/HomePage';
import SideBar from './Sidebar/SideBar';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <SideBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
