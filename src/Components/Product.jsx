// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart';
import { fetchProductById } from '../store/products';
import { selectCategory } from '../store/categories';

function Product ({ product }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.items.find((item) => item._id === product._id));
  const [currentProduct, setCurrentProduct] = useState(productDetails || product);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (!productDetails) {
      dispatch(fetchProductById(product._id));
    }
  }, [dispatch, product._id, productDetails]);

  useEffect(() => {
    if (productDetails) {
      setCurrentProduct(productDetails);
    }
  }, [productDetails]);

  const handleAddToCart = async () => {
    await dispatch(addToCart({ product: currentProduct, category: currentProduct.categories[0] }));
    dispatch(fetchProductById(currentProduct._id));
  };

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ mt: 2, padding: 2 }}>
      <Card>
        <CardMedia
          component="img"
          alt={currentProduct.name}
          height="300"
          image={currentProduct.image}
          title={currentProduct.name}
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>{currentProduct.name}</Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>${currentProduct.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              disabled={currentProduct.quantity === 0}
              sx={{
                mb: 2,
                backgroundColor: currentProduct.quantity === 0 ? 'grey' : 'primary.main',
                cursor: currentProduct.quantity === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              Add to Cart
            </Button>
            <Typography variant="h6">{currentProduct.quantity} in stock</Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5">About Item</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>{currentProduct.description}</Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5">Related Categories:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {currentProduct.categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  color="primary"
                  onClick={() => handleCategoryClick(category)}
                  sx={{ textTransform: 'none' }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Product;
