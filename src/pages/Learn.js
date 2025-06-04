import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Learn = () => {
  const learningResources = [
    {
      title: 'Desi Trader Academy',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      description: 'Comprehensive courses and tutorials to help you master trading strategies and market analysis.',
      link: '/academy'
    },
    {
      title: 'Trading Glossary',
      icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
      description: 'A complete reference guide to trading terms, concepts, and market terminology.',
      link: '/glossary'
    },
    {
      title: 'Market Insights',
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      description: 'Regular updates and analysis of market trends, opportunities, and trading strategies.',
      link: '/insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Box className="bg-primary text-white py-16">
        <Container>
          <Typography variant="h2" component="h1" className="text-center mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn Trading
          </Typography>
          <Box className="flex justify-center">
            <Typography variant="h5" className="text-center text-gray-200 max-w-2xl">
              Master the art of trading with our comprehensive educational resources
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Educational Resources Section */}
      <Container className="py-16">
        <Grid container spacing={4}>
          {learningResources.map((resource, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-primary mb-4">
                    {resource.icon}
                  </div>
                  <Typography variant="h5" component="h2" className="mb-3 font-bold">
                    {resource.title}
                  </Typography>
                  <Typography variant="body1" className="mb-4 text-gray-600">
                    {resource.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={resource.link}
                    className="mt-auto"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box className="bg-primary text-white py-16">
        <Container>
          <Typography variant="h4" component="h2" className="text-center mb-6">
            Ready to Start Your Trading Journey?
          </Typography>
          <Box className="text-center">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/products"
              className="text-lg px-8 py-3"
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Learn; 