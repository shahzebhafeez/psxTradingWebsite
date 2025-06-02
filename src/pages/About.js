import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Avatar } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/team/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Head of Trading',
      image: '/team/jane-smith.jpg',
    },
    {
      name: 'Mike Johnson',
      position: 'Chief Technology Officer',
      image: '/team/mike-johnson.jpg',
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Customer Success',
      image: '/team/sarah-williams.jpg',
    },
  ];

  const values = [
    {
      icon: <BusinessIcon className="text-4xl text-primary" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to provide the best trading experience.',
    },
    {
      icon: <SecurityIcon className="text-4xl text-primary" />,
      title: 'Security',
      description: 'Your security is our top priority. We implement the highest standards of protection.',
    },
    {
      icon: <PeopleIcon className="text-4xl text-primary" />,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do.',
    },
    {
      icon: <EmojiEventsIcon className="text-4xl text-primary" />,
      title: 'Excellence',
      description: 'Committed to delivering excellence in every aspect of our service.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              About Hawk Standard
            </Typography>
            <Typography variant="h5" className="mb-8">
              Empowering investors with innovative trading solutions
            </Typography>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="font-bold mb-6 text-gray-800">
                Our Mission
              </Typography>
              <Typography variant="body1" className="text-gray-600 mb-4">
                At Hawk Standard, we are committed to democratizing access to financial markets
                and empowering individuals to take control of their financial future. Our
                platform combines cutting-edge technology with user-friendly design to make
                trading accessible to everyone.
              </Typography>
              <Typography variant="body1" className="text-gray-600">
                We believe in transparency, security, and innovation, ensuring that our
                users have the tools and resources they need to make informed investment
                decisions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/about/mission.jpg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center font-bold mb-12 text-gray-800">
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="text-center">
                    <Box className="mb-4">{value.icon}</Box>
                    <Typography variant="h5" className="font-semibold mb-2">
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center font-bold mb-12 text-gray-800">
            Our Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="text-center">
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto mb-4"
                    />
                    <Typography variant="h6" className="font-semibold">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default About; 