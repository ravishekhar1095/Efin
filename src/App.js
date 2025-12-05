import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PersonalLoansPage from './pages/PersonalLoansPage';
import BnplPage from './pages/BnplPage';
import TwoWheelerPage from './pages/TwoWheelerPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import SupportPage from './pages/SupportPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/InfoPage';
import SmallBusinessLoanPage from './pages/SmallBusinessLoanPage';
import EVThreeWheelerPage from './pages/EVThreeWheelerPage';
import TwoWheelerLoanPage from './pages/TwoWheelerLoanPage';
import landingPages from './content/landingPages';
import PersonalLoanCalculatorPage from './pages/calculators/PersonalLoanCalculatorPage';
import TwoThreeWheelerCalculatorPage from './pages/calculators/TwoThreeWheelerCalculatorPage';
import EligibilityCalculatorPage from './pages/calculators/EligibilityCalculatorPage';
import CreditScorePage from './pages/calculators/CreditScorePage';
import CareersPage from './pages/CareersPage';
import BlogsPage from './pages/BlogsPage';
import QuizPage from './pages/QuizPage';

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
          <Route path="why-fibe" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/careers" element={<CareersPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/apply" element={<ApplyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="support/login" element={<LoginPage />} />
          <Route path="resources/personal-loan-emi-calculator" element={<PersonalLoanCalculatorPage />} />
          <Route
            path="resources/two-three-wheeler-emi-calculator"
            element={<TwoThreeWheelerCalculatorPage />}
          />
          <Route path="resources/eligibility-calculator" element={<EligibilityCalculatorPage />} />
          <Route path="resources/check-credit-score" element={<CreditScorePage />} />
          <Route path="loans/personal-loan" element={<PersonalLoansPage />} />
          <Route path="loans/instant-cash-loan" element={<SmallBusinessLoanPage />} />
          <Route path="loans/three-wheeler-loan" element={<EVThreeWheelerPage />} />
          <Route path="loans/two-wheeler-loan" element={<TwoWheelerLoanPage />} />
          {Object.entries(landingPages).map(([path, page]) => {
            if (
              page.template === 'calculator' ||
              path === 'about' ||
              path === 'about/careers'
            ) {
              return null;
            }
            if (page.template === 'blogs') {
              return <Route key={path} path={path} element={<BlogsPage />} />;
            }
            if (page.template === 'quiz') {
              return <Route key={path} path={path} element={<QuizPage />} />;
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
