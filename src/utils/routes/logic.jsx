import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from '../../views/pages/landing';
import HomePage from '../../views/pages/home';
import ProjectPage from '../../views/pages/project';
import BoardPage from '../../views/pages/board';
import ProfilePage from '../../views/pages/profile';
import LoginPage from '../../views/pages/_auth/login';
import RegisterPage from '../../views/pages/_auth/register';

import ComputerNavBarIndex from '../../components/templates/navbar/computer';

function RoutesLogic() {

  const isAuthenticated = false;
  const isLandindPage = true;

  const location = useLocation();

  return (
    <>
      
      {location.pathname !== "/auth/login" && location.pathname !== "/auth/register" && <ComputerNavBarIndex isAuthenticated={isAuthenticated} isLandindPage={isLandindPage} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/workspaceid/projectid" element={<ProjectPage />} /> */}
        {/* <Route path="/workspaceid/projectid/*" element={<BoardPage />} /> */}
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes> 
     
    </>
  );
}

export default RoutesLogic