import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <ListItem button component={Link} to={item.path} key={item.text} onClick={handleDrawerToggle}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="relative">
        <div className="absolute left-4">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="md:hidden text-gray-800"
          >
            <MenuIcon />
          </IconButton>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              className="text-gray-800 hover:text-primary"
            >
              {item.text}
            </Button>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Link to="/" className="text-center">
            <span className="text-2xl font-bold text-white tracking-wider whitespace-nowrap">The Hawk Standard</span>
          </Link>
        </div>

        <div className="absolute right-4">
          <Button
            variant="contained"
            color="primary"
            className="bg-primary hover:bg-secondary hidden md:block"
          >
            Get Support
          </Button>
        </div>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 