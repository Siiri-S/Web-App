import { Button } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

enum Language {
  'fi',
  'en',
}

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  console.log(i18n.Language);
  return (
    <div>
      <span>
        <Button
          variant="text"
          color="white"
          disabled={i18n.language == 'fi'}
          onClick={() => {
            i18n.changeLanguage('fi');
          }}
        >
          FI
        </Button>
        |
        <Button
          variant="text"
          color="white"
          disabled={i18n.language == 'en'}
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          EN
        </Button>
      </span>
    </div>
  );
};

export default LanguageSelector;
