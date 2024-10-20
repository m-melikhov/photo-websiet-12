import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/Header';
import Portfolio from './assets/components/Portfolio';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import Personal from './assets/components/portfolios/Personal';
import ForBrands from './assets/components/portfolios/Brands';
import Family from './assets/components/portfolios/Family';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Portfolio showImages={true} />
                <About />
                <Contact />
              </>
            }
          />
          {/* <Route
            path="/"
            element={<Portfolio />}
          /> */}
          <Route
            path="/portfolio"
            element={<Portfolio showImages={false} />}
          >
            <Route
              path="personal"
              element={<Personal />}
            />
            <Route
              path="for-brands"
              element={<ForBrands />}
            />
            <Route
              path="family"
              element={<Family />}
            />
          </Route>
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
