import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import NavBar from './components/NavBar';
import NotificationBanner from './components/NotificationBanner';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <NotificationBanner></NotificationBanner>
      <Router />
    </BrowserRouter>
  );
};

export default App;
