import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
