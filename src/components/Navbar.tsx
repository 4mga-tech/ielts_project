import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { BookOpen, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">IELTS Заавар</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Нүүр
            </Link>
            <Link
              to="/exercises"
              className={`${
                isActive('/exercises') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Дасгалууд
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Бидний тухай
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Холбоо барих
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-gray-600">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Хяналтын самбар
                  </Button>
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">{user?.name}</span>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="text-gray-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Гарах
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-600">
                    Нэвтрэх
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Бүртгүүлэх
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-blue-600' : 'text-gray-600'
                } px-4 py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Нүүр
              </Link>
              <Link
                to="/exercises"
                className={`${
                  isActive('/exercises') ? 'text-blue-600' : 'text-gray-600'
                } px-4 py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Дасгалууд
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 px-4 py-2 text-left"
              >
                Бидний тухай
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 px-4 py-2 text-left"
              >
                Холбоо барих
              </button>
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <div className="px-2 py-2 text-gray-900">
                      {user?.name}
                    </div>
                    <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Хяналтын самбар
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={handleLogout}
                      className="w-full"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Гарах
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Нэвтрэх
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Бүртгүүлэх
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}