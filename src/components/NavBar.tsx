import * as React from 'react';
import { AppBar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const NavBar = () => {
  const { t } = useTranslation();
  const pages = ['skills', 'experience', 'education', 'hobbies', 'contacts'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      {/* Contents */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'space-between',
            sm: 'space-between',
            md: 'center',
          },
          flexWrap: 'nowrap',
          width: { xs: '90%' },
          mx: 'auto',
        }}
      >
        {/* Home icon */}
        <IconButton
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          component={RouterLink}
          to={''}
        >
          <HomeIcon />
        </IconButton>

        {/* Navigation links */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: { md: '75%' },
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
        >
          {pages.map((page) => (
            <Button
              variant="text"
              component={RouterLink}
              key={`${page}-link`}
              to={page}
              color="main.contrastText"
            >
              {t(`${page}.title`)}
            </Button>
          ))}
        </Box>

        {/* Language selector */}
        <Box
          sx={{
            ml: 'auto',
            pt: 0.5,
          }}
        >
          <LanguageSelector />
        </Box>

        {/* Hamburger menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={page}
              >
                {t(`${page}.title`)}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
