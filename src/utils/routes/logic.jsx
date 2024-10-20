import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from '../../views/pages/landing';
import HomePage from '../../views/pages/home';
import WorkspacePage from '../../views/pages/workspace';
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
      <div className='max-w-[1750px] mx-auto p-10'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/workspace/:workspaceId/projects" element={<WorkspacePage />} />
          <Route path="/workspace/:workspaceId/project/:projectId/boards" element={<ProjectPage />} />
          <Route path="/workspace/:workspaceId/project/:projectId/board/:boardId" element={<BoardPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes> 
      </div>
     
    </>
  );
}

export default RoutesLogic