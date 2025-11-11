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
import InfoPage from './pages/InfoPage';
import landingPages from './content/landingPages';
import PersonalLoanCalculatorPage from './pages/calculators/PersonalLoanCalculatorPage';
import InstantLoanCalculatorPage from './pages/calculators/InstantLoanCalculatorPage';
import EligibilityCalculatorPage from './pages/calculators/EligibilityCalculatorPage';
import CreditScorePage from './pages/calculators/CreditScorePage';
import CareersPage from './pages/CareersPage';
import NewsroomPage from './pages/NewsroomPage';

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
          <Route path="about" element={<WhyFinanceCoPage />} />
          <Route path="about/careers" element={<CareersPage />} />
          <Route path="about/news" element={<NewsroomPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/apply" element={<ApplyPage />} />
          <Route path="support/login" element={<LoginPage />} />
          <Route path="resources/personal-loan-emi-calculator" element={<PersonalLoanCalculatorPage />} />
          <Route path="resources/instant-loan-emi-calculator" element={<InstantLoanCalculatorPage />} />
          <Route path="resources/eligibility-calculator" element={<EligibilityCalculatorPage />} />
          <Route path="resources/check-credit-score" element={<CreditScorePage />} />
          {Object.entries(landingPages).map(([path, page]) => {
            if (
              page.template === 'calculator' ||
              path === 'about' ||
              path === 'about/careers' ||
              path === 'about/news'
            ) {
              return null;
            }
            return <Route key={path} path={path} element={<InfoPage page={page} />} />;
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
