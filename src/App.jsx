import { Routes, Route } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';
import AccountSettingsComponent from './components/AccountSettingsComponent';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPages from './pages/AdminPages/AdminPages';
import LandingPages from './pages/LandingPages';
import SearchPage from './pages/SearchPage/SearchPage';
import TestimonialPage from './pages/TestimonialPage/TestimonialPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CompetitionDetail from './pages/CompetitionDetailPage';
import './dist/css/main.css';
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />}>
          <Route
            path="/search"
            element={<SearchPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/competition/:id" element={<CompetitionDetail />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<ProtectedRoute element={<AdminPages />}/>}>
          <Route
            path="dashboard"
            element={<DashboardComponent />}
          />
          <Route path="account" element={<AccountSettingsComponent />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </>
  );
}

export default App;

