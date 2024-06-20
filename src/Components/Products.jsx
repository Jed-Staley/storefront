// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../store/products';
import { addToCart } from '../store/cart';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function Products() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchProductsByCategory(activeCategory));
    }
  }, [activeCategory, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, category: activeCategory }));
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
                <Typography variant="body2">{product.quantity} in stock</Typography>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    disabled={product.quantity === 0}
                    sx={{
                      backgroundColor: product.quantity === 0 ? 'grey' : 'primary.main',
                      cursor: product.quantity === 0 ? 'not-allowed' : 'pointer',
                    }}
                  >
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