import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

const NavBar = () => {
  return (
    <AppBar>
      <Contents>
        <StyledLink to={'education'}> Education</StyledLink>
        <LanguageSelector />
      </Contents>
    </AppBar>
  );
};

const Contents = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  padding-top: 0.5rem;
  color: white;
`;

export default NavBar;
