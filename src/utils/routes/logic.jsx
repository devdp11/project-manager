import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from '../../views/pages/landing';
import HomePage from '../../views/pages/home';
import ProjectPage from '../../views/pages/project';
import BoardPage from '../../views/pages/board';
import ProfilePage from '../../views/pages/profile';
import LoginPage from '../../views/pages/_auth/login';
import RegisterPage from '../../views/pages/_auth/register';

import ComputerNavBarIndex from '../../components/templates/navbar/computer';

import { UseAppContext } from '../hooks/UseAppContext';

function RoutesLogic() {

  const location = useLocation();

  const { isAuthenticated } = UseAppContext();
  const isLandindPage = false;

  return (
    <>
      
      {location.pathname !== "/login" && location.pathname !== "/register" && <ComputerNavBarIndex isAuthenticated={isAuthenticated} isLandindPage={isLandindPage} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/workspaceid/projectid" element={<ProjectPage />} /> */}
        {/* <Route path="/workspaceid/projectid/*" element={<BoardPage />} /> */}
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> 
     
    </>
  );
}

export default RoutesLogic