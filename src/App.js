import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PersonalLoansPage from './pages/PersonalLoansPage';
import BnplPage from './pages/BnplPage';
import TwoWheelerPage from './pages/TwoWheelerPage';
import WhyFinanceCoPage from './pages/WhyFinanceCoPage';
import HowItWorksPage from './pages/HowItWorksPage';
import SupportPage from './pages/SupportPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/personal-loans" element={<PersonalLoansPage />} />
          <Route path="solutions/buy-now-pay-later" element={<BnplPage />} />
          <Route path="solutions/two-wheeler-finance" element={<TwoWheelerPage />} />
          <Route path="why-efin" element={<WhyFinanceCoPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/apply" element={<ApplyPage />} />
          <Route path="support/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
