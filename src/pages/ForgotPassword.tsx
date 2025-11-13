import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <span className="text-gray-900 text-xl">IELTS Заавар</span>
        </Link>

        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-gray-900">
              {submitted ? 'Имэйл илгээсэн' : 'Нууц үг сэргээх'}
            </CardTitle>
            <CardDescription>
              {submitted
                ? 'Нууц үгээ сэргээх заавар таны имэйл хаягт илгээгдсэн'
                : 'Бүртгэлтэй имэйл хаягаа оруулна уу'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Имэйл хаяг</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Сэргээх холбоос илгээх
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    Бид таны <span className="text-blue-600">{email}</span> хаяг руу нууц үг
                    сэргээх холбоос илгээлээ. Имэйлээ шалгана уу.
                  </p>
                </div>
                
                <Link to="/login" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Нэвтрэх хуудас руу буцах
                  </Button>
                </Link>
              </div>
            )}

            <div className="mt-6">
              <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" />
                <span>Нэвтрэх хуудас руу буцах</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
