import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import { productDataOne, productDataTwo } from './components/Products/Data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <HeroSection />
      <Products heading='Choose your favorite' data={productDataOne} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
