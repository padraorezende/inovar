import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FullPage } from '../components/FullPage';
import { AccessManagePage } from '../pages/AccessManagePage';
import { CopyDocumentPage } from '../pages/CopyDocumentPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginContainer } from '../pages/Login/LoginContainer';
import { NewUserPage } from '../pages/NewUserPage';
import { SearchStatusPage } from '../pages/SearchStatusPage';
import { TransferencesPage } from '../pages/TransferencesPage';
import { UploadDataPage } from '../pages/UploadDataPage';
import { WriteOffPage } from '../pages/WriteOffPage';


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/dashboard" element={<FullPage paddingY={"2rem"}><DashboardPage /></FullPage>} />
        <Route path="/copy-document" element={<FullPage><CopyDocumentPage /></FullPage>} />
        <Route path="/transference" element={<FullPage><TransferencesPage /></FullPage>} />
        <Route path="/write-off" element={<FullPage><WriteOffPage /></FullPage>} />
        <Route path="/manager-access" element={<FullPage><AccessManagePage /></FullPage>} />
        <Route path="/new-user" element={<FullPage><NewUserPage /></FullPage>} />
        <Route path="/search-status" element={<FullPage><SearchStatusPage /></FullPage>} />
        <Route path="/upload-data" element={<FullPage><UploadDataPage /></FullPage>} />
      </Routes>
    </Router >
  )
};
