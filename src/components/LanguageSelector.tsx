import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <span>
        <Button
          variant="text"
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
