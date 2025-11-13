import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Clock,
  Target,
  PlayCircle,
  CheckCircle
} from 'lucide-react';

export default function Tests() {
  const testCategories = [
    {
      id: 'listening',
      name: 'Listening',
      icon: Headphones,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      count: 45
    },
    {
      id: 'reading',
      name: 'Reading',
      icon: BookOpen,
      color: 'text-green-600',
      bg: 'bg-green-100',
      count: 50
    },
    {
      id: 'writing',
      name: 'Writing',
      icon: PenTool,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      count: 40
    },
    {
      id: 'speaking',
      name: 'Speaking',
      icon: Mic,
      color: 'text-orange-600',
      bg: 'bg-orange-100',
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
      title: 'Listening Test 4: Multiple Choice Practice',
      difficulty: 'Дунд',
      duration: '25 мин',
      questions: 30,
      completed: false,
      score: null
    }
  ];

  const readingTests = [
    {
      title: 'Reading Test 1: Academic Passages',
      difficulty: 'Дунд',
      duration: '60 мин',
      questions: 40,
      completed: true,
      score: 8.0
    },
    {
      title: 'Reading Test 2: True/False/Not Given',
      difficulty: 'Хүнд',
      duration: '60 мин',
      questions: 40,
      completed: true,
      score: 7.5
    },
    {
      title: 'Reading Test 3: Summary Completion',
      difficulty: 'Хялбар',
      duration: '45 мин',
      questions: 30,
      completed: false,
      score: null
    },
    {
      title: 'Reading Test 4: Matching Headings',
      difficulty: 'Дунд',
      duration: '50 мин',
      questions: 35,
      completed: false,
      score: null
    }
  ];

  const writingTests = [
    {
      title: 'Writing Task 1: Describing Graphs',
      difficulty: 'Дунд',
      duration: '20 мин',
      questions: 1,
      completed: true,
      score: 7.0
    },
    {
      title: 'Writing Task 2: Opinion Essays',
      difficulty: 'Хүнд',
      duration: '40 мин',
      questions: 1,
      completed: true,
      score: 6.5
    },
    {
      title: 'Writing Task 1: Process Diagrams',
      difficulty: 'Дунд',
      duration: '20 мин',
      questions: 1,
      completed: false,
      score: null
    },
    {
      title: 'Writing Task 2: Discussion Essays',
      difficulty: 'Хүнд',
      duration: '40 мин',
      questions: 1,
      completed: false,
      score: null
    }
  ];

  const speakingTests = [
    {
      title: 'Speaking Part 1: Introduction & Interview',
      difficulty: 'Хялбар',
      duration: '5 мин',
      questions: 12,
      completed: true,
      score: 7.0
    },
    {
      title: 'Speaking Part 2: Long Turn',
      difficulty: 'Дунд',
      duration: '4 мин',
      questions: 1,
      completed: true,
      score: 6.5
    },
    {
      title: 'Speaking Part 3: Discussion',
      difficulty: 'Хүнд',
      duration: '5 мин',
      questions: 8,
      completed: false,
      score: null
    },
    {
      title: 'Speaking Mock Test: Full Test',
      difficulty: 'Хүнд',
      duration: '15 мин',
      questions: 3,
      completed: false,
      score: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Хялбар':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Дунд':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Хүнд':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const renderTestCard = (test: any) => (
    <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-gray-900 dark:text-white mb-2">{test.title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                {test.difficulty}
              </Badge>
              {test.completed && (
                <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  Дууссан
                </Badge>
              )}
            </div>
          </div>
          {test.completed && test.score && (
            <div className="ml-4 text-center">
              <div className="text-blue-600 dark:text-blue-400 text-xl">{test.score}</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs">Оноо</div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-400 text-sm">
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
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
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
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Дасгал Тестүүд</h1>
        <p className="text-gray-600 dark:text-gray-400">IELTS-ийн бүх хэсгүүдийг дадлагажуулаарай</p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {testCategories.map((category) => (
          <Card key={category.id} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${category.bg} dark:opacity-80 rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-1">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{category.count} тест</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tests Tabs */}
      <Tabs defaultValue="listening" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="listening">Listening</TabsTrigger>
          <TabsTrigger value="reading">Reading</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="speaking">Speaking</TabsTrigger>
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
  );
}