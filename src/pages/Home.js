import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";

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

      {/* Trading View Attribution */}
      <Typography 
        variant="h6" 
        className="text-center py-4 font-bold text-primary"
        sx={{ 
          textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
          letterSpacing: '0.5px',
          backgroundColor: 'rgba(26, 35, 126, 0.05)'
        }}
      >
        Charts are powered by{' '}
        <a 
          href="https://www.tradingview.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary transition-colors duration-200 underline"
        >
          Trading View
        </a>
      </Typography>

      {/* Market Overview Section */}
      <section className="py-8 sm:py-12">
        <Container maxWidth="lg">
          <Typography variant="h4" className="text-center mb-6 font-bold text-gray-800">
            Global Market Overview
          </Typography>
          <Paper elevation={3} className="p-4 rounded-lg">
            <MarketOverview
              colorTheme="light"
              height={400}
              width="100%"
              showChart={true}
              locale="en"
              largeChartUrl=""
              isTransparent={false}
              showSymbolLogo={true}
              plotLineColorFilling="#2962FF"
              plotLineColor="#2962FF"
              symbolColor="#2962FF"
              showFloatingTooltip={true}
              symbolsGroups={[
                {
                  name: "Major Indices",
                  symbols: [
                    { name: "FOREXCOM:SPXUSD" },
                    { name: "NASDAQ:NDX" },
                    { name: "FOREXCOM:DJI" },
                    { name: "INDEX:DEU30" },
                    { name: "INDEX:JPN225" }
                  ]
                },
                ]}
              />
          </Paper>
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

      {/* Trading Chart Section */}
      <section className="py-8 sm:py-12">
        <Container maxWidth="lg">
          <Typography variant="h4" className="text-center mb-6 font-bold text-gray-800">
            Live Market Chart
          </Typography>
          <Paper elevation={3} className="p-4 rounded-lg">
            <AdvancedRealTimeChart
              theme="light"
              symbol="NASDAQ:AAPL"
              interval="D"
              timezone="America/New_York"
              style="1"
              locale="en"
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              allow_symbol_change={true}
              container_id="tradingview_chart"
            />
          </Paper>
        </Container>
      </section>

      {/* Market Analysis Section */}
      <section className="py-8 sm:py-12">
        <Container maxWidth="lg">
          <Typography variant="h4" className="text-center mb-6 font-bold text-gray-800">
            Market Analysis
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h6" className="font-semibold mb-3">
                    Top Gainers
                  </Typography>
                  <Box className="space-y-2">
                    {['AAPL', 'MSFT', 'GOOGL'].map((stock) => (
                      <Box key={stock} className="flex justify-between items-center p-2 bg-green-50 rounded">
                        <Typography>{stock}</Typography>
                        <Typography className="text-green-600">+3.2%</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h6" className="font-semibold mb-3">
                    Top Losers
                  </Typography>
                  <Box className="space-y-2">
                    {['TSLA', 'META', 'NFLX'].map((stock) => (
                      <Box key={stock} className="flex justify-between items-center p-2 bg-red-50 rounded">
                        <Typography>{stock}</Typography>
                        <Typography className="text-red-600">-2.1%</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Market News Headlines */}
            <Grid item xs={12} md={6}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h6" className="font-semibold mb-3">
                    Market News Headlines
                  </Typography>
                  <Box className="space-y-2">
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">Tech stocks rally on strong earnings reports</Typography>
                      <Typography variant="caption" color="textSecondary">Source: Reuters - 2 hours ago</Typography>
                    </Box>
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">Oil prices climb amid geopolitical tensions</Typography>
                      <Typography variant="caption" color="textSecondary">Source: Bloomberg - 4 hours ago</Typography>
                    </Box>
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">Central bank signals potential interest rate hike</Typography>
                      <Typography variant="caption" color="textSecondary">Source: Wall Street Journal - 1 day ago</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Upcoming Economic Events */}
            <Grid item xs={12} md={6}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h6" className="font-semibold mb-3">
                    Upcoming Economic Events
                  </Typography>
                  <Box className="space-y-2">
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">Consumer Price Index (CPI) Report</Typography>
                      <Typography variant="caption" color="textSecondary">Date: Oct 26, 2023 - Impact: High</Typography>
                    </Box>
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">FOMC Meeting Minutes</Typography>
                      <Typography variant="caption" color="textSecondary">Date: Oct 27, 2023 - Impact: Medium</Typography>
                    </Box>
                    <Box className="p-2 bg-gray-50 rounded">
                      <Typography variant="body2" className="font-semibold">Unemployment Rate Data</Typography>
                      <Typography variant="caption" color="textSecondary">Date: Nov 3, 2023 - Impact: High</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
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