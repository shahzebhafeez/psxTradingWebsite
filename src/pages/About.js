import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const About = () => {
  const leadership = [
    {
      name: 'Asim',
      role: 'CEO & Founder',
      description: 'Visionary leader with extensive experience in financial markets and technology.'
    },
    {
      name: 'Shahzeb Hafeez',
      role: 'CTO',
      description: 'Technology expert driving innovation in trading platforms and financial solutions.'
    },
    {
      name: 'Abdullah Asif',
      role: 'Head of Customer Success',
      description: 'Dedicated to ensuring exceptional customer experience and satisfaction.'
    },
    {
      name: 'Ahsanullah',
      role: 'Head of Trading',
      description: 'Expert in market analysis and trading strategies with years of experience.'
    }
  ];

  return (
    <Container className="py-12">
      {/* Hero Section */}
      <Box className="flex flex-col items-center justify-center mb-16">
        <Typography variant="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          About Desi Trader
        </Typography>
        <Typography variant="h5" className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl text-center">
          Empowering Pakistani investors with innovative trading solutions and expert market insights
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box className="mb-16">
        <Typography variant="h3" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Our Mission
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardContent>
                <Typography variant="h5" className="font-bold mb-4">
                  Innovation
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  Continuously developing cutting-edge trading tools and platforms to enhance the trading experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardContent>
                <Typography variant="h5" className="font-bold mb-4">
                  Education
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  Empowering traders with knowledge and resources to make informed investment decisions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardContent>
                <Typography variant="h5" className="font-bold mb-4">
                  Trust
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  Building long-term relationships through transparency, security, and reliable service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Leadership Section */}
      <Box>
        <Typography variant="h3" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Our Leadership
        </Typography>
        <Grid container spacing={4}>
          {leadership.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h5" className="font-bold mb-2">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className="text-primary mb-3">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 