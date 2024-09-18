import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('education.title')}</h1>
    </div>
  );
};

export default Education;
