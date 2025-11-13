import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900">IELTS Заавар</span>
            </div>
            <p className="text-gray-600 text-sm">
              IELTS шалгалтад бэлтгэх хамгийн шилдэг онлайн платформ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Холбоосууд</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Нүүр
              </Link>
              <Link to="/practice-tests" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Дасгал Тест
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Бидний тухай
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Холбоо барих
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 mb-4">Нөөц</h3>
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Хяналтын самбар
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Нэвтрэх
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                Бүртгүүлэх
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 mb-4">Холбоо барих</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 text-sm">info@ielts.mn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 text-sm">+976 9999 9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 text-sm">Улаанбаатар, Монгол</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 IELTS Заавар. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
