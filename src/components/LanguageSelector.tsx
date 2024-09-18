import { Button } from '@mui/material';
import { useState } from 'react';

enum Language {
  'FI',
  'EN',
}

const LanguageSelector = () => {
  const [selectedLanguage, setLanguage] = useState<Language>('FI');
  return (
    <div>
      <span>
        <Button
          variant="text"
          color="white"
          disabled={selectedLanguage == 'FI'}
          onClick={() => {
            setLanguage('FI');
          }}
        >
          FI
        </Button>
        |
        <Button
          variant="text"
          color="white"
          disabled={selectedLanguage == 'EN'}
          onClick={() => {
            setLanguage('EN');
          }}
        >
          EN
        </Button>
      </span>
    </div>
  );
};

export default LanguageSelector;
