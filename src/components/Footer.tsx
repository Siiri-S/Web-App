import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.spacing(10),
        mx: (theme) => theme.spacing(-10),
        position: 'fixed',
        bottom: 0,
        width: '100%',
        bgcolor: 'primary.light',
      }}
    ></Box>
  );
};

export default Footer;
