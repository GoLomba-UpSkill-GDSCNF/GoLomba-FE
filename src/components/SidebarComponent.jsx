import { Nav } from 'react-bootstrap';
import { Link,  useLocation} from 'react-router-dom';
import { useState , useEffect} from 'react';
import Logo from '../assets/img/logo/logo-go-lomba.svg';

const SidebarComponent = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const location = useLocation();


  const handleMenuClick = (menuKey) => {
    setActiveMenuItem(menuKey === activeMenuItem ? null : menuKey);
  };

  useEffect(() => {
    if (location.pathname === '/admin/dashboard') {
      setActiveMenuItem('dashboard');
    } else if (location.pathname === '/account') {
      setActiveMenuItem('account');
    }
  }, [location.pathname]);

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">

      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
          <img src={Logo} alt="logo-golomba" width="40px"/>
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2 text-dark">GoLomba</span>
        </Link>

        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <Nav className="menu-inner py-1">
        <Nav.Item className={activeMenuItem === 'dashboard' ? 'menu-item active' : 'menu-item'}>
          <Nav.Link as={Link} to="/admin/dashboard" className="menu-link" onClick={() => handleMenuClick('dashboard')}>
            <div data-i18n="Analytics">
            <i className="fa fa-solid fa-house me-3"></i>
              Dashboard</div>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className={activeMenuItem === 'account' ? 'menu-item active' : 'menu-item'}>
          <Nav.Link as={Link} to="/admin/account" className="menu-link" onClick={() => handleMenuClick('account')}>
            <div data-i18n="Account">
            <i className="fa fa-solid fa-user me-3"></i>
              Account</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
};

export default SidebarComponent;
