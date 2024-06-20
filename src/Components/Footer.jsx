// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: 'primary.main' }}>
      <Typography variant="body2" color="white" align="center">
        Jedidiah Staley © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
