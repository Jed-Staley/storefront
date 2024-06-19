import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/categories';
import { Grid, Paper, ButtonBase, Typography } from '@mui/material';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  if (!Array.isArray(categories)) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item key={category.name}>
          <ButtonBase onClick={() => dispatch(selectCategory(category.name))}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{category.displayName}</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
}

export default Categories;