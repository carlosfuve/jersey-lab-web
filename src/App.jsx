import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CompetitionPage from './pages/CompetitionPage';
import ContactUsPage from './pages/ContactUsPage';
import SalesPage from './pages/SalesPage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jerseys" element={<CompetitionPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        {/* <Route path="/politica-privacidad" element={<PrivacyPolicy />} /> */}

        {/*<Route path="*" element={<Navigate to="/" replace />} /> */}
      </Route>

    </Routes>
  )
}
