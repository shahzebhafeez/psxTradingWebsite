import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900 text-white py-12">
      <Container>
        <Grid container spacing={4}>
          {/* Products Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Products
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Sukuks
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Mutual Funds
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Learn Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Learn
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              About
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Tools Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Tools
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link to="/investment-calculator" className="text-gray-300 hover:text-white transition-colors">
                  Investment Calculator
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio Tracker
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box className="mt-12 pt-8 border-t border-gray-800">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" className="text-gray-400">
                © {new Date().getFullYear()} Desi Trader. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li>
                  <Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 