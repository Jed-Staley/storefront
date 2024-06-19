import React from 'react';
import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  const isCartVisible = useSelector((state) => state.cart.isVisible);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ py: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Categories />
        </Box>
        <Box>
          <Products />
        </Box>
      </Container>
      {isCartVisible && <Cart />}
      <Footer />
    </Box>
  );
}

export default App;
