import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';

const NotificationBanner = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: (theme) => theme.spacing(1),
        height: (theme) => theme.spacing(4),
        mx: (theme) => theme.spacing(-10),
        my: (theme) => theme.spacing(6),
        borderRadius: 1,
        position: 'fixed',
        width: '100%',
        bgcolor: 'info.main',
        color: 'secondary.contrastText',
        top: 0,
        py: (theme) => theme.spacing(0.5),
        px: (theme) => theme.spacing(10),
      }}
    >
      <InfoIcon />
      {t('info.pageInProgress')}
    </Box>
  );
};

export default NotificationBanner;
