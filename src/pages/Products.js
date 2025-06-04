import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      title: 'Stocks',
      description: 'Trade stocks of leading companies listed on the Pakistan Stock Exchange (PSX). Access real-time market data, advanced trading tools, and expert insights to make informed investment decisions.',
      features: [
        'Real-time market data and analysis',
        'Advanced trading tools and charts',
        'Expert market insights and research',
        'Secure and reliable trading platform'
      ]
    },
    {
      title: 'Sukuks',
      description: 'Invest in Shariah-compliant Sukuks (Islamic bonds) that provide regular income while adhering to Islamic finance principles. Our platform offers a wide range of Sukuk options with competitive returns.',
      features: [
        'Shariah-compliant investment options',
        'Regular income distribution',
        'Diverse Sukuk portfolio',
        'Expert Islamic finance guidance'
      ]
    }
  ];

  return (
    <Container className="py-12">
      <Typography variant="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        Our Products
      </Typography>
      <Typography variant="h5" className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center mb-12">
        Discover our range of investment products designed for the Pakistani market
      </Typography>

      <Grid container spacing={6}>
        {products.map((product, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="h-full flex flex-col">
              <CardContent className="flex-grow">
                <Typography variant="h4" className="text-2xl sm:text-3xl font-bold mb-4">
                  {product.title}
                </Typography>
                <Typography variant="body1" className="text-base sm:text-lg text-gray-600 mb-6">
                  {product.description}
                </Typography>
                <Box className="mb-6">
                  <Typography variant="h6" className="text-lg sm:text-xl font-semibold mb-3">
                    Key Features:
                  </Typography>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-base sm:text-lg text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box className="flex justify-center">
                  <Button
                    component={Link}
                    to="/coming-soon"
                    variant="contained"
                    color="primary"
                    size="large"
                    className="w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 