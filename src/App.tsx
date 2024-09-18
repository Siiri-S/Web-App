import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import NavBar from './components/NavBar';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Router />
    </BrowserRouter>
  );
};

export default App;
