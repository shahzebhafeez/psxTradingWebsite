import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <Container>
        <Box className="text-center">
          <ConstructionIcon sx={{ fontSize: 80 }} className="text-primary mb-4" />
          <Typography variant="h3" component="h1" className="font-bold mb-4 text-gray-800">
            Coming Soon
          </Typography>
          <Box className="flex justify-center">
            <Typography variant="h6" className="text-gray-600 max-w-2xl">
              We're working hard to bring you this feature. Please check back later!
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ComingSoon; 