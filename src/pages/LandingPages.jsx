import { Outlet, useLocation } from 'react-router-dom';
import Navbarcomponent from '../components/Navbarcomponent';
import Footercomponent from '../components/Footercomponent';
import HomePage from './HomePage';

const LandingPages = () => {
  const location = useLocation();

  const landingPaths = ['/search', '/testimonials', '/about'];

  const isLandingPage = landingPaths.some(path => location.pathname.includes(path));

  const isCompetitionDetailPage = location.pathname.startsWith('/competition/');

  return (
    <div>
      <Navbarcomponent />
      {(!isLandingPage && !isCompetitionDetailPage) && (
        <HomePage />
      )}
      <Outlet />
      <Footercomponent />
    </div>
  );
};

export default LandingPages;
