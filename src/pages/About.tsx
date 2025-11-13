import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Зорилго',
      description: 'IELTS шалгалтанд бэлтгэх хамгийн сайн онлайн платформ байх'
    },
    {
      icon: Users,
      title: 'Баг',
      description: 'Олон улсын туршлагатай мэргэжлийн багш нарын баг'
    },
    {
      icon: Award,
      title: 'Чанар',
      description: 'Олон улсын стандартад нийцсэн өндөр чанарын материал'
    },
    {
      icon: TrendingUp,
      title: 'Амжилт',
      description: '95% -ийн амжилтын хувь, 10,000+ сэтгэл ханамжтай суралцагч'
    }
  ];

  const team = [
    {
      name: 'Доктор Б. Баатар',
      role: 'Үүсгэн байгуулагч & CEO',
      description: 'IELTS-ийн шинжээч, 15+ жилийн туршлагатай'
    },
    {
      name: 'М. Сарнай',
      role: 'Ахлах багш',
      description: 'Cambridge сертификаттай, 10+ жилийн туршлагатай'
    },
    {
      name: 'Л. Болд',
      role: 'Контент менежер',
      description: 'IELTS 8.5 оноотой, материал боловсруулагч'
    },
    {
      name: 'Ч. Ганболд',
      role: 'Технологийн удирдагч',
      description: 'Боловсролын технологийн мэргэжилтэн'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">Бидний тухай</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            IELTS Заавар нь Монголын суралцагчдад IELTS шалгалтанд амжилттай тэнцэхэд нь
            туслах зорилгоор үүсгэгдсэн орчин үеийн онлайн боловсролын платформ юм.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-gray-900 text-center mb-6">Бидний эрхэм зорилго</h2>
            <p className="text-gray-600 text-center mb-6">
              Бид дэлхийн стандартад нийцсэн, чанартай, хүртээмжтэй IELTS сургалтыг
              Монголын суралцагч бүрт хүргэхийг эрхэмлэдэг. Технологи болон багшлах
              урлагийг хослуулан суралцагчдын амжилтыг баталгаажуулдаг.
            </p>
            <p className="text-gray-600 text-center">
              2020 онд үүсгэн байгуулагдсан цагаасаа хойш бид 10,000 гаруй суралцагчдад
              амжилттай тэнцэхэд нь тусалж ирсэн бөгөөд энэ нь бидний хамгийн том амжилт юм.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Манай баг</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              IELTS-ийн мэргэжилтнүүд, туршлагатай багш нар, технологийн мэргэжилтнүүдээс
              бүрдсэн манай баг таны амжилтын төлөө ажилладаг.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-blue-600 text-4xl mb-2">10,000+</div>
              <div className="text-gray-600">Суралцагч</div>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">500+</div>
              <div className="text-gray-600">Дасгал тест</div>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">95%</div>
              <div className="text-gray-600">Амжилтын хувь</div>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">7.5</div>
              <div className="text-gray-600">Дундаж оноо</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
