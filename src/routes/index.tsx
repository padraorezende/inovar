import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/dashboard" element={<FullPage><DashboardContainer /></FullPage>} />
        <Route path="/copy-document" element={<FullPage><CopyDocumentPage /></FullPage>} />
        <Route path="/transference" element={<FullPage><TransferencesPage /></FullPage>} />
        <Route path="/write-off" element={<FullPage><WriteOffPage /></FullPage>} />
        <Route path="/search-status" element={<FullPage><SearchStatusContainer /></FullPage>} />
        <Route path="/upload-data" element={<FullPage><UploadDataContainer /></FullPage>} />
        <Route path="/manager-access" element={<FullPage><AccessManagePageContaier /></FullPage>} />
        <Route path="/new-user" element={<FullPage><NewUserContainer /></FullPage>} />
      </Routes>
    </Router >
  )
}; 
