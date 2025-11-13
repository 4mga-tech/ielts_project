import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  TrendingUp,
  Award,
  Calendar,
  Target,
  BarChart3,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ProgressPage() {
  const overallStats = [
    {
      icon: Award,
      label: "Дундаж оноо",
      value: "7.5",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: Target,
      label: "Хийсэн тест",
      value: "24",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Clock,
      label: "Суралцсан цаг",
      value: "42",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: TrendingUp,
      label: "Өсөлт",
      value: "+12%",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  const monthlyProgress = [
    {
      month: "Долдугаар",
      listening: 6.5,
      reading: 7.0,
      writing: 6.0,
      speaking: 6.5,
    },
    {
      month: "Наймдугаар",
      listening: 7.0,
      reading: 7.5,
      writing: 6.5,
      speaking: 6.8,
    },
    {
      month: "Есдүгээр",
      listening: 7.2,
      reading: 7.8,
      writing: 6.8,
      speaking: 7.0,
    },
    {
      month: "Аравдугаар",
      listening: 7.5,
      reading: 8.0,
      writing: 7.0,
      speaking: 7.0,
    },
    {
      month: "Арван нэгдүгээр",
      listening: 7.5,
      reading: 8.0,
      writing: 7.0,
      speaking: 7.0,
    },
  ];

  const skillComparison = [
    { skill: "Listening", current: 7.5, target: 8.0, progress: 94 },
    { skill: "Reading", current: 8.0, target: 8.5, progress: 94 },
    { skill: "Writing", current: 7.0, target: 8.0, progress: 88 },
    { skill: "Speaking", current: 7.0, target: 8.0, progress: 88 },
  ];

  const recentScores = [
    { date: "2025-01-10", test: "Reading Test 5", score: 8.0 },
    { date: "2025-01-08", test: "Listening Test 8", score: 7.5 },
    { date: "2025-01-05", test: "Writing Task 2", score: 7.0 },
    { date: "2025-01-03", test: "Speaking Test 4", score: 7.0 },
    { date: "2025-01-01", test: "Reading Test 4", score: 7.5 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Ахиц дэвшил</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Таны сургалтын үр дүн болон өсөлт
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overallStats.map((stat, index) => (
          <Card
            key={index}
            className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-900 dark:text-white text-2xl">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 ${stat.bg} dark:opacity-80 rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Ерөнхий</TabsTrigger>
          <TabsTrigger value="skills">Ур чадвар</TabsTrigger>
          <TabsTrigger value="history">Түүх</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6">
            {/* Monthly Progress Chart */}
            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Сарын дундаж оноо
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 9]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="listening"
                      stroke="#3b82f6"
                      name="Listening"
                    />
                    <Line
                      type="monotone"
                      dataKey="reading"
                      stroke="#10b981"
                      name="Reading"
                    />
                    <Line
                      type="monotone"
                      dataKey="writing"
                      stroke="#8b5cf6"
                      name="Writing"
                    />
                    <Line
                      type="monotone"
                      dataKey="speaking"
                      stroke="#f59e0b"
                      name="Speaking"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Ур чадварын хэмжилт
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillComparison.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-white">
                      {skill.skill}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Одоогийн:{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                          {skill.current}
                        </span>
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Зорилт:{" "}
                        <span className="text-green-600 dark:text-green-400">
                          {skill.target}
                        </span>
                      </span>
                    </div>
                  </div>
                  <Progress value={skill.progress} className="h-3" />
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-right">
                    {skill.progress}%
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Calendar className="w-5 h-5 text-blue-600" />
                Сүүлийн тестүүд
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentScores.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div>
                      <p className="text-gray-900 dark:text-white">
                        {item.test}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.date}
                      </p>
                    </div>
                    <div className="text-2xl text-blue-600 dark:text-blue-400">
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
