import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Имэйл',
      content: 'info@ielts.mn',
      link: 'mailto:info@ielts.mn'
    },
    {
      icon: Phone,
      title: 'Утас',
      content: '+976 9999 9999',
      link: 'tel:+97699999999'
    },
    {
      icon: MapPin,
      title: 'Хаяг',
      content: 'Сүхбаатар дүүрэг, Улаанбаатар хот',
      link: null
    },
    {
      icon: Clock,
      title: 'Ажлын цаг',
      content: 'Даваа - Баасан: 9:00 - 18:00',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Холбоо барих</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Асуулт, санал, хүсэлт байвал бидэнтэй холбогдоорой. Бид танд тусалахад
            таатай байна.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-sm">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Мессеж илгээх
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Холбоо барих мэдээлэл</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-gray-600 text-sm">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">Шуурхай хариу</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Бид таны мессежид 24 цагийн дотор хариу өгөхийг хичээдэг.
                </p>
                <p className="text-gray-600 text-sm">
                  Яаралтай асуудлын хувьд манай утасны дугаарт шууд залгана уу.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-gray-900 text-center mb-8">Түгээмэл асуултууд</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Бүртгэл үнэгүй юу?
                </h3>
                <p className="text-gray-600 text-sm">
                  Тийм, үндсэн бүртгэл болон зарим материал бүрэн үнэгүй. Премиум
                  материалд хандахын тулд төлбөртэй багц авах шаардлагатай.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Хичээлүүд хэр үргэлжлэх вэ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Та өөрийн цагаар суралцах боломжтой. Хичээл бүр 15-45 минут
                  үргэлжилнэ.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Багшаас туслалцаа авах боломжтой юу?
                </h3>
                <p className="text-gray-600 text-sm">
                  Тийм, премиум багцын хэрэглэгчид мэргэжлийн багшаас шууд
                  зөвлөгөө авах боломжтой.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Сертификат олгодог уу?
                </h3>
                <p className="text-gray-600 text-sm">
                  Бүх курсүүдээ амжилттай дүүргэсэн суралцагчид олон улсын
                  хүлээн зөвшөөрөгдсөн сертификат олгоно.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
