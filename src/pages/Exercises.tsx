import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Clock,
  Target,
  PlayCircle,
  CheckCircle,
  TrendingUp,
  BarChart3,
  GraduationCap
} from 'lucide-react';

export default function Exercises() {
  const testCategories = [
    {
      id: 'listening',
      name: 'Listening',
      icon: Headphones,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
      gradient: 'from-emerald-500 to-teal-500',
      count: 45
    },
    {
      id: 'reading',
      name: 'Reading',
      icon: BookOpen,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500',
      count: 50
    },
    {
      id: 'writing',
      name: 'Writing',
      icon: PenTool,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      gradient: 'from-purple-500 to-pink-500',
      count: 40
    },
    {
      id: 'speaking',
      name: 'Speaking',
      icon: Mic,
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      gradient: 'from-orange-500 to-red-500',
      count: 35
    }
  ];

  const listeningTests = [
    {
      title: 'Listening Test 1: Daily Conversations',
      difficulty: 'Хялбар',
      duration: '30 мин',
      questions: 40,
      completed: true,
      score: 8.0
    },
    {
      title: 'Listening Test 2: Academic Lectures',
      difficulty: 'Дунд',
      duration: '30 мин',
      questions: 40,
      completed: true,
      score: 7.5
    },
    {
      title: 'Listening Test 3: Mixed Topics',
      difficulty: 'Хүнд',
      duration: '30 мин',
      questions: 40,
      completed: false,
      score: null
    },
    {
      title: 'Listening Test 4: Business Context',
      difficulty: 'Дунд',
      duration: '30 мин',
      questions: 40,
      completed: false,
      score: null
    }
  ];

  const readingTests = [
    {
      title: 'Reading Test 1: General Topics',
      difficulty: 'Хялбар',
      duration: '60 мин',
      questions: 40,
      completed: true,
      score: 8.0
    },
    {
      title: 'Reading Test 2: Academic Passages',
      difficulty: 'Дунд',
      duration: '60 мин',
      questions: 40,
      completed: true,
      score: 7.5
    },
    {
      title: 'Reading Test 3: Complex Texts',
      difficulty: 'Хүнд',
      duration: '60 мин',
      questions: 40,
      completed: false,
      score: null
    }
  ];

  const writingTests = [
    {
      title: 'Writing Task 1: Letter Writing',
      difficulty: 'Хялбар',
      duration: '20 мин',
      questions: 1,
      completed: true,
      score: 7.0
    },
    {
      title: 'Writing Task 2: Essay - Opinion',
      difficulty: 'Дунд',
      duration: '40 мин',
      questions: 1,
      completed: true,
      score: 7.5
    },
    {
      title: 'Writing Task 2: Essay - Problem/Solution',
      difficulty: 'Дунд',
      duration: '40 мин',
      questions: 1,
      completed: false,
      score: null
    }
  ];

  const speakingTests = [
    {
      title: 'Speaking Part 1: Introduction',
      difficulty: 'Хялбар',
      duration: '5 мин',
      questions: 8,
      completed: true,
      score: 7.0
    },
    {
      title: 'Speaking Part 2: Long Turn',
      difficulty: 'Дунд',
      duration: '4 мин',
      questions: 1,
      completed: false,
      score: null
    },
    {
      title: 'Speaking Part 3: Discussion',
      difficulty: 'Хүнд',
      duration: '5 мин',
      questions: 5,
      completed: false,
      score: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Хялбар':
        return 'bg-emerald-100 text-emerald-700';
      case 'Дунд':
        return 'bg-amber-100 text-amber-700';
      case 'Хүнд':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderTestCard = (test: any) => (
    <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{test.title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                {test.difficulty}
              </Badge>
              {test.completed && (
                <Badge variant="outline" className="bg-blue-100 text-blue-700">
                  Дууссан
                </Badge>
              )}
            </div>
          </div>
          {test.completed && test.score && (
            <div className="ml-4 text-center">
              <div className="text-blue-600 text-xl">{test.score}</div>
              <div className="text-gray-600 text-xs">Оноо</div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{test.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            <span>{test.questions} асуулт</span>
          </div>
        </div>

        <Button
          className={`w-full ${
            test.completed
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
          }`}
        >
          {test.completed ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Дахин өгөх
            </>
          ) : (
            <>
              <PlayCircle className="w-4 h-4 mr-2" />
              Эхлүүлэх
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Дасгал Тестүүд</h1>
          <p className="text-gray-600">IELTS-ийн бүх хэсгүүдийг дадлагажуулаарай</p>
        </div>

        {/* Level Test Card */}
        <Card className="mb-8 border-2 border-gradient-to-r from-yellow-400 to-orange-500 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-gray-900 mb-2">Түвшин тодорхойлох тест</h2>
                <p className="text-gray-700 mb-4">
                  Өөрийн одоогийн IELTS түвшингээ мэдэж, тохирох дасгалуудыг олоорой
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>45 минут</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Target className="w-4 h-4" />
                    <span>50 асуулт</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <BarChart3 className="w-4 h-4" />
                    <span>Дэлгэрэнгүй үр дүн</span>
                  </div>
                </div>
              </div>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Тест өгөх
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testCategories.map((category) => (
            <Card key={category.id} className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} тест</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tests Tabs */}
        <Tabs defaultValue="listening" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white p-1 shadow-md">
            <TabsTrigger value="listening" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">Listening</TabsTrigger>
            <TabsTrigger value="reading" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Reading</TabsTrigger>
            <TabsTrigger value="writing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">Writing</TabsTrigger>
            <TabsTrigger value="speaking" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">Speaking</TabsTrigger>
          </TabsList>

          <TabsContent value="listening">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listeningTests.map((test, index) => (
                <div key={index}>{renderTestCard(test)}</div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reading">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readingTests.map((test, index) => (
                <div key={index}>{renderTestCard(test)}</div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="writing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {writingTests.map((test, index) => (
                <div key={index}>{renderTestCard(test)}</div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakingTests.map((test, index) => (
                <div key={index}>{renderTestCard(test)}</div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
