import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import {
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  Calendar,
  Target,
  PlayCircle,
  CheckCircle
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: BookOpen, label: 'Нийт тест', value: '24', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: CheckCircle, label: 'Дууссан', value: '18', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: Clock, label: 'Суралцсан цаг', value: '42', color: 'text-purple-600', bg: 'bg-purple-100' },
    { icon: Award, label: 'Дундаж оноо', value: '7.5', color: 'text-yellow-600', bg: 'bg-yellow-100' }
  ];

  const recentTests = [
    { name: 'Reading Test 5', score: 8.0, date: '2025-01-10', status: 'completed' },
    { name: 'Listening Test 8', score: 7.5, date: '2025-01-08', status: 'completed' },
    { name: 'Writing Task 2', score: 7.0, date: '2025-01-05', status: 'completed' }
  ];

  const upcomingLessons = [
    { title: 'Speaking Practice Session', time: '2025-01-15 10:00', type: 'Live Session' },
    { title: 'Writing Task 1 Workshop', time: '2025-01-16 14:00', type: 'Workshop' },
    { title: 'Grammar Review', time: '2025-01-17 16:00', type: 'Lesson' }
  ];

  const skillProgress = [
    { skill: 'Listening', progress: 75, score: 7.5 },
    { skill: 'Reading', progress: 85, score: 8.0 },
    { skill: 'Writing', progress: 65, score: 7.0 },
    { skill: 'Speaking', progress: 70, score: 7.0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Сайн байна уу, Батболд!</h1>
          <p className="text-gray-600">Таны өнөөдрийн ахиц дэвшил</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-gray-900 text-2xl">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Skill Progress */}
          <Card className="lg:col-span-2 border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Target className="w-5 h-5 text-blue-600" />
                Ур чадварын түвшин
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">{item.skill}</span>
                    <span className="text-blue-600">{item.score}</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Үйлдлүүд</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/practice-tests">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Тест эхлүүлэх
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ахиц үзэх
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Хичээл товлох
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Tests */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-gray-900">
                <span>Сүүлийн тестүүд</span>
                <Link to="/practice-tests" className="text-sm text-blue-600 hover:text-blue-700">
                  Бүгдийг үзэх
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">{test.name}</p>
                        <p className="text-gray-600 text-sm">{test.date}</p>
                      </div>
                    </div>
                    <div className="text-blue-600">{test.score}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Lessons */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-gray-900">
                <span>Удахгүй болох хичээлүүд</span>
                <Calendar className="w-5 h-5 text-gray-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingLessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-gray-900">{lesson.title}</p>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        {lesson.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
