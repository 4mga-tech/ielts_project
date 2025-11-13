import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Calendar } from '../../components/ui/calendar';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  BookOpen,
  Users,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingLessons = [
    {
      id: 1,
      title: 'Speaking Practice Session',
      date: '2025-01-15',
      time: '10:00 - 11:30',
      type: 'Live Session',
      instructor: 'Багш Сарнай',
      status: 'upcoming',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Writing Task 1 Workshop',
      date: '2025-01-16',
      time: '14:00 - 15:30',
      type: 'Workshop',
      instructor: 'Багш Болд',
      status: 'upcoming',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Grammar Review',
      date: '2025-01-17',
      time: '16:00 - 17:00',
      type: 'Lesson',
      instructor: 'Багш Оюунaa',
      status: 'upcoming',
      color: 'green'
    },
    {
      id: 4,
      title: 'Listening Practice',
      date: '2025-01-18',
      time: '10:00 - 11:00',
      type: 'Practice',
      instructor: 'Self-paced',
      status: 'scheduled',
      color: 'orange'
    }
  ];

  const todaySchedule = [
    {
      time: '09:00 - 10:00',
      title: 'Reading Practice',
      type: 'Self-study'
    },
    {
      time: '14:00 - 15:00',
      title: 'Vocabulary Building',
      type: 'Practice'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Live Session':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Workshop':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Lesson':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Practice':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Хичээлийн хуваарь</h1>
        <p className="text-gray-600 dark:text-gray-400">Таны удахгүй болох хичээл болон үйл явдлууд</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
              <span>Хуанли</span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Нэмэх
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border dark:border-gray-700"
            />
            
            {/* Today's Schedule */}
            <div className="mt-6">
              <h3 className="text-gray-900 dark:text-white mb-4">Өнөөдрийн хуваарь</h3>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                    <p className="text-gray-900 dark:text-white text-sm">{item.title}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {item.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Lessons */}
        <Card className="lg:col-span-2 border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <CalendarIcon className="w-5 h-5 text-blue-600" />
              Удахгүй болох хичээлүүд
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <Card key={lesson.id} className="border border-gray-200 dark:border-gray-600 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-white mb-2">{lesson.title}</h3>
                        <Badge variant="outline" className={getTypeColor(lesson.type)}>
                          {lesson.type}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Нээх
                      </Button>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{lesson.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{lesson.instructor}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                        >
                          Оролцох
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="dark:border-gray-600 dark:text-gray-300"
                        >
                          Цуцлах
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6 border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Түргэн үйлдлүүд</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              Хичээл товлох
            </Button>
            <Button variant="outline" className="justify-start dark:border-gray-600 dark:text-gray-300">
              <Video className="w-4 h-4 mr-2" />
              Бичлэг үзэх
            </Button>
            <Button variant="outline" className="justify-start dark:border-gray-600 dark:text-gray-300">
              <Users className="w-4 h-4 mr-2" />
              Багш хайх
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
