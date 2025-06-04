import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';

const Home = () => {
  const features = [
    {
      icon: <SecurityIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'Guaranteed Security',
      description: 'Your investments are protected with state-of-the-art security measures.',
    },
    {
      icon: <TrendingUpIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'Seamless Trading',
      description: 'Trade with confidence using our advanced trading platform.',
    },
    {
      icon: <NotificationsIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'Stock Alerts',
      description: 'Stay informed with real-time notifications and market updates.',
    },
    {
      icon: <AnalyticsIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'Portfolio Analytics',
      description: 'Track and analyze your portfolio performance in real-time.',
    },
    {
      icon: <PaymentIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'In-app Payments',
      description: 'Easy and secure payment processing within the platform.',
    },
    {
      icon: <InfoIcon className="text-3xl sm:text-4xl text-primary" />,
      title: 'Market Data',
      description: 'Access comprehensive market data and analysis tools.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 md:py-20">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h3" className="font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Your Investment Partner
            </Typography>
            <Typography variant="h5" className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-gray-100">
              At Desi Trader, we are enabling financial empowerment for everyone.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/products"
              className="bg-white text-primary hover:bg-gray-100 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center mb-8 sm:mb-12 font-bold text-gray-800 text-2xl sm:text-3xl md:text-4xl">
            Why Desi Trader?
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="text-center p-4 sm:p-6">
                    <Box className="mb-3 sm:mb-4">{feature.icon}</Box>
                    <Typography variant="h5" className="font-semibold mb-2 text-lg sm:text-xl md:text-2xl">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className="text-sm sm:text-base">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h4" className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Start Your Investment Journey Today
            </Typography>
            <Typography variant="h6" className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-100">
              Join thousands of successful investors on our platform
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/products"
              className="bg-white text-primary hover:bg-gray-100 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home; 