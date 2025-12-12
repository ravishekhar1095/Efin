import './App.css';
import './performance-optimizations.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PersonalLoansPage from './pages/PersonalLoansPage';

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
import LoanAgainstPropertyPage from './pages/LoanAgainstPropertyPage';
import landingPages from './content/landingPages';
import PersonalLoanCalculatorPage from './pages/calculators/PersonalLoanCalculatorPage';
import TwoThreeWheelerCalculatorPage from './pages/calculators/TwoThreeWheelerCalculatorPage';
import EligibilityCalculatorPage from './pages/calculators/EligibilityCalculatorPage';
import CreditScorePage from './pages/calculators/CreditScorePage';
import CareersPage from './pages/CareersPage';
import PoliciesPage from './pages/PoliciesPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import GrievanceRedressalPage from './pages/GrievanceRedressalPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminDashboardLayout from './components/AdminDashboardLayout';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import SuperAdminDashboardPage from './pages/SuperAdminDashboardPage';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main website routes with header and footer */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions/personal-loans" element={<PersonalLoansPage />} />

          <Route path="solutions/two-wheeler-finance" element={<TwoWheelerPage />} />
          <Route path="why-fibe" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/careers" element={<CareersPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/contact" element={<ContactPage />} />
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
          <Route path="loans/small-business-loan" element={<SmallBusinessLoanPage />} />
          <Route path="loans/three-wheeler-loan" element={<EVThreeWheelerPage />} />
          <Route path="loans/two-wheeler-loan" element={<TwoWheelerLoanPage />} />
          <Route path="loans/loan-against-property" element={<LoanAgainstPropertyPage />} />
          <Route path="policies/policies" element={<PoliciesPage />} />
          <Route path="policies/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="policies/disclaimer" element={<DisclaimerPage />} />
          <Route path="policies/grievance-redressal" element={<GrievanceRedressalPage />} />
          {Object.entries(landingPages).map(([path, page]) => {
            if (
              page.template === 'calculator' ||
              path === 'about' ||
              path === 'about/careers'
            ) {
              return null;
            }
            return <Route key={path} path={path} element={<InfoPage page={page} />} />;
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Dashboard routes with separate layout (no footer) - Protected */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        {/* Admin Portal Routes */}
        <Route path="admin/login" element={<AdminLoginPage />} />

        {/* Admin Dashboard Routes - Protected */}
        <Route element={<ProtectedAdminRoute><AdminDashboardLayout /></ProtectedAdminRoute>}>
          <Route path="admin/dashboard" element={<AdminDashboardPage />} />
        </Route>

        {/* Super Admin Dashboard - Requires Super Admin Role */}
        <Route element={<ProtectedAdminRoute requireSuperAdmin={true}><AdminDashboardLayout /></ProtectedAdminRoute>}>
          <Route path="admin/super-dashboard" element={<SuperAdminDashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
