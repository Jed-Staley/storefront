import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ py: 3 }}>
        <Categories />
        <Products />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
