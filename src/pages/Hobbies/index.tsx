import { useTranslation } from 'react-i18next';

const Hobbies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('hobbies.title')}</h1>
    </div>
  );
};

export default Hobbies;
