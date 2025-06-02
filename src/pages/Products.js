import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Products = () => {
  const products = [
    {
      title: 'Stocks',
      icon: <TrendingUpIcon className="text-4xl text-primary" />,
      description: 'Trade stocks from major exchanges with real-time market data and advanced trading tools.',
      features: [
        'Real-time market data',
        'Advanced trading tools',
        'Portfolio tracking',
        'Market analysis',
      ],
    },
    {
      title: 'Sukuks',
      icon: <AccountBalanceIcon className="text-4xl text-primary" />,
      description: 'Invest in Islamic financial instruments with our Shariah-compliant trading platform.',
      features: [
        'Shariah-compliant investments',
        'Diverse sukuk options',
        'Regular income streams',
        'Risk management tools',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-center font-bold mb-4 text-gray-800">
          Our Products
        </Typography>
        <Typography variant="h5" className="text-center mb-12 text-gray-600">
          Choose from our range of investment products
        </Typography>

        <Grid container spacing={6}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <Box className="text-center mb-6">
                    {product.icon}
                    <Typography variant="h4" className="font-bold mt-4 mb-2">
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className="mb-6">
                      {product.description}
                    </Typography>
                  </Box>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Box className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <Typography variant="body1">{feature}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Box className="text-center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="bg-primary hover:bg-secondary"
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="text-center mt-16">
          <Typography variant="h5" className="mb-6 text-gray-800">
            Ready to start investing?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-primary hover:bg-secondary"
          >
            Open an Account
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Products; 