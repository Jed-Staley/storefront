import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/categories';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  if (!Array.isArray(categories)) {
    return null;
  }

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.name}>
          <ListItemButton onClick={() => dispatch(selectCategory(category.name))}>
            <ListItemText primary={category.displayName} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Categories;