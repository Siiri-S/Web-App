import { routerType } from '../types/router.types';
import Education from './Education';
import Home from './Home';
import Hobbies from './Hobbies';
import WorkExperience from './WorkExperience';
const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'education',
    element: <Education />,
    title: 'education',
  },
  {
    path: 'hobbies',
    element: <Hobbies />,
    title: 'hobbies',
  },
  {
    path: 'experience',
    element: <WorkExperience />,
    title: 'work experiece',
  },
];

export default pagesData;
