import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Typography variant="h6">
            My Virtual Store
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;