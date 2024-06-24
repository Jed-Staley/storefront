/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart';
import { Box, Typography, List, ListItem, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkout from './Checkout'; // Import the Checkout component

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = [...cart.items].reverse();
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false); // State to toggle Checkout view

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({ cartId: item.cartId, productId: item._id, categories: item.categories, activeCategory }));
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  if (checkout) {
    return <Checkout />;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 64,
        right: 0,
        width: 300,
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h6">
        Cart {cartItems.length > 0 ? `(${cartItems.length})` : '(empty)'}
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem
            key={item.cartId}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(item)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {item.name}
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        sx={{ mt: 2 }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
