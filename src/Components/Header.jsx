/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/cart';

function Header() {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Typography variant="h6">
            My Virtual Store
          </Typography>
        </Box>
        <IconButton color="inherit" onClick={handleToggleCart}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;