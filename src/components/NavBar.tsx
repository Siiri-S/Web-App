import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <AppBar>
      <Contents>
        <StyledLink to={''}> {t('home.title')}</StyledLink>
        <StyledLink to={'experience'}> {t('workExperience.title')}</StyledLink>
        <StyledLink to={'education'}> {t('education.title')}</StyledLink>
        <StyledLink to={'hobbies'}> {t('hobbies.title')}</StyledLink>

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
