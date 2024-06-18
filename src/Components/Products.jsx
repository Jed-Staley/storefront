import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

function Products() {
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const products = useSelector((state) =>
    state.products.filter((product) => product.categories.includes(activeCategory))
  );

  return (
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;