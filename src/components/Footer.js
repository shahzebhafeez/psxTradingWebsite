import React from 'react';
import { Container, Grid, Typography, Link as MuiLink, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { text: 'Stocks', path: '/products/stocks' },
        { text: 'Sukuks', path: '/products/sukuks' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { text: 'Glossary', path: '/learn/glossary' },
        { text: 'Academy', path: '/learn/academy' },
        { text: 'Quick Takes', path: '/learn/quick-takes' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', path: '/about' },
        { text: 'Careers', path: '/about/careers' },
        { text: 'Updates', path: '/about/updates' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { text: 'Investment Calculator', path: '/tools/calculator' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="mb-6">
              <Typography variant="h4" className="font-bold mb-4 text-white">
                The Hawk Standard
              </Typography>
              <Typography variant="body2" color="textSecondary" className="text-gray-400">
                Your trusted partner in investment and trading.
              </Typography>
            </Box>
            <Box className="flex space-x-4">
              <MuiLink href="#" color="inherit">
                <FacebookIcon />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <TwitterIcon />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <LinkedInIcon />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <InstagramIcon />
              </MuiLink>
            </Box>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography variant="h6" className="font-bold mb-4">
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Box className="border-t border-gray-800 mt-12 pt-8">
          <Typography variant="body2" color="textSecondary" className="text-center text-gray-400">
            © {new Date().getFullYear()} The Hawk Standard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer; 