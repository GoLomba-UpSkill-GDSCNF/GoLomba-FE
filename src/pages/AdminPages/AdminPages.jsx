import { Outlet, Navigate, useLocation} from 'react-router-dom';
import NavComponent from '../../components/NavComponent';
import SidebarComponent from '../../components/SidebarComponent';
import '../../assets/css/core.css';
import '../../assets/css/theme-default.css';
import '../../assets/css/demo.css';
import '../../assets/css/perfect-scrollbar.css';
import '../../assets/css/apex-charts.css';


const AdminPages = () => {

  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isAdminAccount = location.pathname.startsWith('/admin/account');

  return (
    <>
    {(isAdmin === true) && (
    <Navigate to="/admin/dashboard" />
    )}
    {(isAdminAccount === true) && (
    <Navigate to="/admin/account" />
    )}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
      <SidebarComponent />
      <div className="layout-page">
        <NavComponent />
        <Outlet />
      </div>
      </div>
    </div>
    </>
  );
};

export default AdminPages;
