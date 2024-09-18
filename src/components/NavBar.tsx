import * as React from 'react';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const NavBar = () => {
  const { t, i18n } = useTranslation();
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

        <StyledLink to={''}>
          <HomeIcon />
        </StyledLink>

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
            <StyledLink to={page}>{t(`${page}.title`)}</StyledLink>
          ))}
        </Box>

        {/* Language selector */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex', md: 'flex' },
            ml: { sm: 'auto' },
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
            <MenuItem>
              <LanguageSelector />
            </MenuItem>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <MenuLink to={page}>{t(`${page}.title`)}</MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};

const StyledLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem 0 1rem;
`;
const MenuLink = styled(Link)`
  padding: 0.5rem;
  color: black;
`;

export default NavBar;
