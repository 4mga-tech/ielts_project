import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import { ThemeProvider } from './components/ThemeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import PracticeTests from './pages/PracticeTests';
import Exercises from './pages/Exercises';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Tests from './pages/dashboard/Tests';
import Payment from './pages/dashboard/Payment';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import Progress from './pages/dashboard/Progress';
import Schedule from './pages/dashboard/Schedule';

// Component to redirect logged-in users from home to dashboard
function HomeOrDashboard() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <Home />;
}

// Component to redirect logged-in users from auth pages to dashboard
function AuthPageWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeOrDashboard />} />
            <Route path="/login" element={<AuthPageWrapper><Login /></AuthPageWrapper>} />
            <Route path="/register" element={<AuthPageWrapper><Register /></AuthPageWrapper>} />
            <Route path="/forgot-password" element={<AuthPageWrapper><ForgotPassword /></AuthPageWrapper>} />
            
            {/* Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <DashboardHome />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/tests"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Tests />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/payment"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Payment />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Profile />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Settings />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/progress"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Progress />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/schedule"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Schedule />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            
            {/* Public Routes */}
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}