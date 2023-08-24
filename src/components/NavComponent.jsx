import { NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      {/* ... Navbar toggle and search input */}
      

      <div className='navbar-nav-right d-flex align-items-center' id="navbar-collapse">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="fa fa-solid fa-bars"></i>
              </a>
            </div>
      {/* <!-- Search --> */}
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="fa-solid fa-magnifying-glass fa-lg me-3"></i>
                  <input
                    type="text"
                    className="form-control border-1 shadow-none bg-transparent"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              {/* <!-- /Search --> */}

      <ul className="navbar-nav flex-row align-items-center ms-auto">
        {/* User Dropdown */}
        <NavDropdown title={<img src="../assets/img/avatars/1.png" alt="User Avatar" className="w-px-40 h-auto rounded-circle" />} id="userDropdown" align="end">

        </NavDropdown>
      </ul>
      </div>
      
    </nav>
  );
};

export default NavbarComponent;
