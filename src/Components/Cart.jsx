/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart';
import { Box, Typography, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const cartItems = cart.items;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({ cartId: item.cartId, productId: item._id, category: activeCategory }));
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
    </Box>
  );
}

export default Cart;
