import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Users,
  Target,
  Mail,
  Phone,
  MapPin,
  Clock as ClockIcon,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const features = [
    {
      icon: BookOpen,
      title: "Иж бүрэн материал",
      description: "IELTS-ийн бүх хэсгүүдийг хамарсан дэлгэрэнгүй материал",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Явцын хяналт",
      description: "Өөрийн ахиц дэвшлийг хянах боломжтой",
      color: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Clock,
      title: "Уян хатан цаг",
      description: "Хүссэн цагтаа, хүссэн газраасаа суралцаарай",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Award,
      title: "Баталгаат үр дүн",
      description: "Мэргэжлийн багш нарын туршлага дээр үндэслэсэн",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const benefits = [
    "Бодит шалгалтын загварт тохирсон дасгалууд",
    "Мэргэжлийн багш нарын зөвлөгөө",
    "Хувь хүний явцын дэлгэрэнгүй тайлан",
    "Listening, Reading, Writing, Speaking бүх хэсэг",
    "Олон улсын жишигт нийцсэн агуулга",
    "Онлайн болон оффлайн суралцах боломж",
  ];

  const values = [
    {
      icon: Target,
      title: "Зорилго",
      description: "IELTS шалгалтанд бэлтгэх хамгийн сайн онлайн платформ байх",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Баг",
      description: "Олон улсын туршлагатай мэргэжлийн багш нарын баг",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Чанар",
      description: "Олон улсын стандартад нийцсэн өндөр чанарын материал",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Амжилт",
      description: "95% -ийн амжилтын хувь, 10,000+ сэтгэл ханамжтай суралцагч",
      color: "from-orange-500 to-red-500",
    },
  ];

  const team = [
    {
      name: "Доктор Г.Амгаланбаатар",
      role: "Үүсгэн байгуулагч & CEO",
      description: "IELTS-ийн шинжээч, 15+ жилийн туршлагатай",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Г.Амгаланбаатар",
      role: "Ахлах багш",
      description: "Cambridge сертификаттай, 10+ жилийн туршлагатай",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Г.Амгаланбаатар",
      role: "Контент менежер",
      description: "IELTS 8.5 оноотой, материал боловсруулагч",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Г.Амгаланбаатар",
      role: "Технологийн удирдагч",
      description: "Боловсролын технологийн мэргэжилтэн",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Имэйл",
      content: "info@ielts.mn",
      link: "mailto:info@ielts.mn",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Утас",
      content: "+976 9999 9999",
      link: "tel:+97699999999",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Хаяг",
      content: "Сүхбаатар дүүрэг, Улаанбаатар хот",
      link: null,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ClockIcon,
      title: "Ажлын цаг",
      content: "Даваа - Баасан: 9:00 - 18:00",
      link: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Banner */}
      <section className="relative overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzAwNjU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-blue-900/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6">
              IELTS шалгалтад бэлтгэх хамгийн шилдэг платформ
            </h1>
            <p className="text-blue-100 mb-8 text-lg">
              Мэргэжлийн багш нар, орчин үеийн арга зүй, баталгаат үр дүнгээр
              таны мөрөөдлийн оноог авахад тусална
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Эхлэх
                </Button>
              </Link>
              <Link to="/exercises">
                <Button
                  variant="outline"
                  className="px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  Дасгал үзэх
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Яагаад биднийг сонгох вэ?</h2>
            <p className="text-gray-600">
              IELTS шалгалтад амжилттай тэнцэхэд шаардлагатай бүх зүйл нэг
              дороос
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Таны амжилтын түлхүүр</h2>
              <p className="text-gray-600 mb-8">
                IELTS Заавар нь олон мянган суралцагчдад амжилттай тэнцэхэд нь
                туслсан туршлагатай платформ юм. Бид таны хэрэгцээнд тохирсон,
                өндөр чанартай материалаар хангана.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Өнөөдөр эхлээрэй</h3>
                  <p className="text-gray-600 text-sm">
                    Бүртгэл үнэгүй, хялбар бөгөөд хурдан
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <span className="text-gray-700">Бүртгэлтэй хэрэглэгч</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      10,000+
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                    <span className="text-gray-700">Дасгал тест</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      500+
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <span className="text-gray-700">Амжилтын хувь</span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      95%
                    </span>
                  </div>
                </div>

                <Link to="/register" className="block mt-6">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Бүртгүүлэх
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Бидний тухай</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              IELTS Заавар нь Монголын суралцагчдад IELTS шалгалтанд амжилттай
              тэнцэхэд нь туслах зорилгоор үүсгэгдсэн орчин үеийн онлайн
              боловсролын платформ юм.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-gray-600 mb-6">
              Бид дэлхийн стандартад нийцсэн, чанартай, хүртээмжтэй IELTS
              сургалтыг Монголын суралцагч бүрт хүргэхийг эрхэмлэдэг. Технологи
              болон багшлах урлагийг хослуулан суралцагчдын амжилтыг
              баталгаажуулдаг.
            </p>
            <p className="text-gray-600">
              2020 онд үүсгэн байгуулагдсан цагаасаа хойш бид 10,000 гаруй
              суралцагчдад амжилттай тэнцэхэд нь тусалж ирсэн бөгөөд энэ нь
              бидний хамгийн том амжилт юм.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-gray-900 mb-4">Манай баг</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                IELTS-ийн мэргэжилтнүүд, туршлагатай багш нар, технологийн
                мэргэжилтнүүдээс бүрдсэн манай баг таны амжилтын төлөө
                ажилладаг.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-lg`}
                    >
                      <span className="text-3xl">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Суралцагч</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-4xl mb-2">
                500+
              </div>
              <div className="text-gray-600">Дасгал тест</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl mb-2">
                95%
              </div>
              <div className="text-gray-600">Амжилтын хувь</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-4xl mb-2">
                7.5
              </div>
              <div className="text-gray-600">Дундаж оноо</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Холбоо барих</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Асуулт, санал, хүсэлт байвал бидэнтэй холбогдоорой. Бид танд
              тусалахад таатай байна.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">Мессеж илгээх</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Нэр</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Таны нэр"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Имэйл хаяг</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Утасны дугаар</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+976 9999 9999"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Сэдэв</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="Мессежийн сэдэв"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Мессеж</Label>
                      <Textarea
                        id="message"
                        placeholder="Та юу асуухыг хүсэж байна вэ?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-gray-300 min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                    >
                      Мессеж илгээх
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">
                    Холбоо барих мэдээлэл
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-gray-600 text-sm">
                            {info.content}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-gradient-to-r from-blue-400 to-purple-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">Шуурхай хариу</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Бид таны мессежид 24 цагийн дотор хариу өгөхийг хичээдэг.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Яаралтай асуудлын хувьд манай утасны дугаарт шууд залгана
                    уу.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            IELTS-ээр өндөр оноо авахад бэлэн үү?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Өнөөдөр бүртгүүлж, мөрөөдлийнхөө оноонд хүрээрэй
          </p>
          <Link to="/register">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 shadow-xl hover:shadow-2xl transition-all">
              Үнэгүй эхлэх
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
