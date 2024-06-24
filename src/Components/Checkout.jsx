// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../store/cart';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePlaceOrder = async () => {
    const orderDetails = {
      items: cartItems,
      payment: paymentDetails,
    };
    await axios.post(`${SERVER_URL}/order`, orderDetails);
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <Box sx={{ mt: 2, padding: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Checkout</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h5">Order Summary</Typography>
          <Box sx={{ my: 2 }}>
            {cartItems.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>{item.name}</Typography>
                <Typography>${item.price}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h5">Total</Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h6">${calculateTotal()}</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h5">Payment Details</Typography>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Expiry Date"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="CVV"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            color="primary"
            onClick={handlePlaceOrder}
          >
            Place Your Order
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
