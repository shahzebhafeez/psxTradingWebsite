import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Our Products', path: '/products' },
    { text: 'Learn', path: '/learn' },
    { text: 'About', path: '/about' },
    { text: 'Tools', path: '/tools' },
    { text: 'FAQs', path: '/faqs' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.text} 
          onClick={handleDrawerToggle}
          selected={location.pathname === item.path}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" className="bg-white shadow-md" color="default">
      <Container maxWidth="lg">
        <Toolbar className="px-0">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 no-underline">
            <TrendingUpIcon className="text-primary text-3xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Desi Trader
            </span>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box className="flex-grow flex justify-center space-x-1">
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className="ml-auto text-gray-800"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        classes={{
          paper: 'w-64',
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 