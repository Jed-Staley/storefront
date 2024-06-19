import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function Products() {
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const products = useSelector((state) =>
    state.products.filter((product) => product.categories.includes(activeCategory))
  );
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.name} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;