import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Save, Moon, Bell, Globe, Lock } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../components/ThemeContext';

export default function Settings() {
  const { isDark, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    language: 'mn',
    timezone: 'Asia/Ulaanbaatar'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.id]: e.target.value
    });
  };

  const handleSaveSettings = () => {
    console.log('Settings saved:', settings);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password change:', passwordData);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Тохиргоо</h1>
        <p className="text-gray-600 dark:text-gray-400">Системийн тохиргоогоо өөрчлөөрэй</p>
      </div>

      <div className="space-y-6">
        {/* Appearance Settings */}
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Moon className="w-5 h-5" />
              Харагдах байдал
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Програмын харагдах байдлыг өөрчлөх
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode" className="text-gray-900 dark:text-white">
                  Харанхуй горим
                </Label>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Харанхуй горимыг идэвхжүүлэх
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={isDark}
                onCheckedChange={toggleTheme}
              />
            </div>

            <Separator className="dark:bg-gray-700" />

            <div className="space-y-2">
              <Label htmlFor="language" className="text-gray-900 dark:text-white">
                Хэл
              </Label>
              <Select
                value={settings.language}
                onValueChange={(value) => handleSettingChange('language', value)}
              >
                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mn">Монгол</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-gray-900 dark:text-white">
                Цагийн бүс
              </Label>
              <Select
                value={settings.timezone}
                onValueChange={(value) => handleSettingChange('timezone', value)}
              >
                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Ulaanbaatar">Улаанбаатар (UTC+8)</SelectItem>
                  <SelectItem value="Asia/Tokyo">Токио (UTC+9)</SelectItem>
                  <SelectItem value="Asia/Seoul">Сөүл (UTC+9)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Bell className="w-5 h-5" />
              Мэдэгдэл
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Мэдэгдлийн тохиргоо
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications" className="text-gray-900 dark:text-white">
                  Имэйл мэдэгдэл
                </Label>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Имэйлээр мэдэгдэл хүлээн авах
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) =>
                  handleSettingChange('emailNotifications', checked)
                }
              />
            </div>

            <Separator className="dark:bg-gray-700" />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-notifications" className="text-gray-900 dark:text-white">
                  Push мэдэгдэл
                </Label>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Браузер дээр мэдэгдэл харуулах
                </p>
              </div>
              <Switch
                id="push-notifications"
                checked={settings.pushNotifications}
                onCheckedChange={(checked) =>
                  handleSettingChange('pushNotifications', checked)
                }
              />
            </div>

            <Separator className="dark:bg-gray-700" />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weekly-report" className="text-gray-900 dark:text-white">
                  Долоо хоногийн тайлан
                </Label>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  7 хоног тутамд ахиц тайлан авах
                </p>
              </div>
              <Switch
                id="weekly-report"
                checked={settings.weeklyReport}
                onCheckedChange={(checked) => handleSettingChange('weeklyReport', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Password Change */}
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Lock className="w-5 h-5" />
              Нууц үг солих
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Аюулгүй байдлын үүднээс нууц үгээ тогтмол солино уу
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Одоогийн нууц үг</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Шинэ нууц үг</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Шинэ нууц үг давтах</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="border-gray-300 dark:border-gray-600"
                />
              </div>

              <Button type="submit" variant="outline" className="dark:border-gray-600">
                Нууц үг шинэчлэх
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSaveSettings}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Хадгалах
          </Button>
        </div>
      </div>
    </div>
  );
}