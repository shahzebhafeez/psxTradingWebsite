import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeedIcon from '@mui/icons-material/Speed';

const Learn = () => {
  const learningResources = [
    {
      title: 'Finqalab Academy',
      icon: <SchoolIcon className="text-4xl text-primary" />,
      description:
        'Comprehensive courses designed to help you master trading and investment strategies.',
      image: '/learn/academy.jpg',
      link: '/learn/academy',
    },
    {
      title: 'Glossary',
      icon: <MenuBookIcon className="text-4xl text-primary" />,
      description:
        'A comprehensive dictionary of trading and investment terms to help you understand the market better.',
      image: '/learn/glossary.jpg',
      link: '/learn/glossary',
    },
    {
      title: 'Quick Takes',
      icon: <SpeedIcon className="text-4xl text-primary" />,
      description:
        'Short, informative articles about market trends, trading tips, and investment strategies.',
      image: '/learn/quick-takes.jpg',
      link: '/learn/quick-takes',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              Learn to Trade
            </Typography>
            <Typography variant="h5" className="mb-8">
              Master the art of trading with our comprehensive educational resources
            </Typography>
          </div>
        </Container>
      </section>

      {/* Learning Resources Section */}
      <section className="py-20">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center font-bold mb-12 text-gray-800">
            Educational Resources
          </Typography>

          <Grid container spacing={6}>
            {learningResources.map((resource) => (
              <Grid item xs={12} md={4} key={resource.title}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardMedia
                    component="img"
                    height="200"
                    image={resource.image}
                    alt={resource.title}
                  />
                  <CardContent>
                    <Box className="flex items-center mb-4">
                      {resource.icon}
                      <Typography variant="h5" className="font-bold ml-3">
                        {resource.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary" className="mb-6">
                      {resource.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      href={resource.link}
                      className="bg-primary hover:bg-secondary"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h4" className="font-bold mb-4 text-gray-800">
              Ready to Start Your Learning Journey?
            </Typography>
            <Typography variant="h6" className="mb-8 text-gray-600">
              Join thousands of successful traders who started with our educational resources
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/learn/academy"
              className="bg-primary hover:bg-secondary"
            >
              Start Learning
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Learn; 