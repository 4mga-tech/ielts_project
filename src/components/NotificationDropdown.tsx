import { Bell } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

export default function NotificationDropdown() {
  const notifications = [
    {
      id: 1,
      title: 'Шинэ тест нэмэгдлээ',
      message: 'Listening Test 10 одоо боломжтой боллоо',
      time: '5 минутын өмнө',
      unread: true
    },
    {
      id: 2,
      title: 'Хичээлийн сануулга',
      message: 'Speaking Practice Session маргааш 10:00 цагт',
      time: '1 цагийн өмнө',
      unread: true
    },
    {
      id: 3,
      title: 'Ахиц дэвшил',
      message: 'Та Reading хэсэгт 85% хүрлээ!',
      time: '2 цагийн өмнө',
      unread: false
    },
    {
      id: 4,
      title: 'Багцын мэдэгдэл',
      message: 'Таны Premium багц 7 хоногийн дараа дуусна',
      time: '1 өдрийн өмнө',
      unread: false
    },
    {
      id: 5,
      title: 'Тестийн үр дүн',
      message: 'Writing Task 2 - Таны оноо: 7.5',
      time: '2 өдрийн өмнө',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-600 text-white text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Мэдэгдлүүд</h3>
          {unreadCount > 0 && (
            <Badge variant="outline" className="bg-blue-100 text-blue-700">
              {unreadCount} шинэ
            </Badge>
          )}
        </div>
        <ScrollArea className="h-96">
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={`p-4 cursor-pointer flex flex-col items-start gap-1 ${
                notification.unread ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <p className="font-medium text-sm">{notification.title}</p>
                {notification.unread && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                )}
              </div>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
        <div className="p-2 border-t">
          <Button variant="ghost" className="w-full text-sm">
            Бүгдийг үзэх
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
