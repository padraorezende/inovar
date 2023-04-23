import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FullPage } from '../components/FullPage';
import { AccessManagePageContaier } from '../pages/AccessManage/AccessManageContainer';
import { CopyDocumentPage } from '../pages/CopyDocumentPage';
import { DashboardContainer } from '../pages/Dashboard/DashboardContainer';
import { LoginContainer } from '../pages/Login/LoginContainer';
import { NewUserContainer } from '../pages/NewUser/NewUserContainer';
import { SearchStatusContainer } from '../pages/SearchStatus/SearchStatusContainer';
import { TransferencesPage } from '../pages/TransferencesPage';
import { UploadDataContainer } from '../pages/UploadData/UploadDataContainer';
import { WriteOffPage } from '../pages/WriteOffPage';


const PrivateRoutes = () => {
  const authToken = localStorage.getItem('auth_token');
  return (
    authToken ? <Outlet /> : <Navigate to="/" />
  )
};

const UserPermissionsRoutes = () => {
  const permissionAdmin = localStorage.getItem('user_admin');
  return (
    permissionAdmin ? <Outlet /> : <Navigate to="/search-status" />
  )
};

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<UserPermissionsRoutes />}>
            <Route path="/dashboard" element={<FullPage page='/dashboard'><DashboardContainer /></FullPage>} />
          </Route>
          <Route path="/copy-document" element={<FullPage page='/copy-document'><CopyDocumentPage /></FullPage>} />
          <Route path="/transference" element={<FullPage page='/transference'><TransferencesPage /></FullPage>} />
          <Route path="/write-off" element={<FullPage page='/write-off'><WriteOffPage /></FullPage>} />
          <Route path="/search-status" element={<FullPage page='/search-status'><SearchStatusContainer /></FullPage>} />
          <Route element={<UserPermissionsRoutes />}>
            <Route path="/upload-data" element={<FullPage page='/upload-data'><UploadDataContainer /></FullPage>} />
            <Route path="/manager-access" element={<FullPage page='/manager-access'><AccessManagePageContaier /></FullPage>} />
            <Route path="/new-user" element={<FullPage page='/new-user'><NewUserContainer /></FullPage>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
