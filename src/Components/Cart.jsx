import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from '../store/cart';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.items;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

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
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Cart;
