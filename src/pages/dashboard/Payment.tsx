import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Check, CreditCard, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Payment() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const currentPlan = {
    name: 'Premium',
    price: 69000,
    period: 'сар',
    features: ['Хязгааргүй тест', 'Бүх материал', '24/7 дэмжлэг']
  };

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 69000,
      yearlyPrice: 799000,
      features: [
        'Хязгааргүй тест',
        'Үндсэн материал',
        'Имэйл дэмжлэг',
        'Ахиц хяналт',
        'Сертификат'
      ],
      popular: false
    },
    {
      name: 'Premium',
      monthlyPrice: 69000,
      yearlyPrice: 799000,
      features: [
        'Хязгааргүй тест',
        'Бүх материал',
        '24/7 дэмжлэг',
        'Багшийн зөвлөгөө',
        'Ахиц хяналт',
        'Сертификат',
        'Онлайн хичээл'
      ],
      popular: true
    },
    {
      name: 'Pro',
      monthlyPrice: 69000,
      yearlyPrice: 799000,
      features: [
        'Хязгааргүй тест',
        'Бүх материал',
        '24/7 VIP дэмжлэг',
        'Хувийн багш',
        'Ахиц хяналт',
        'Сертификат',
        'Онлайн хичээл',
        'Mock test илгээх'
      ],
      recommended: true
    }
  ];

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const totalMonthly = monthlyPrice * 12;
    const savings = totalMonthly - yearlyPrice;
    return savings.toLocaleString();
  };

  const paymentHistory = [
    { date: '2025-01-01', plan: 'Premium', amount: 69000, status: 'Идэвхтэй' },
    { date: '2024-12-01', plan: 'Premium', amount: 69000, status: 'Дууссан' },
    { date: '2024-11-01', plan: 'Premium', amount: 69000, status: 'Дууссан' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Төлбөр</h1>
        <p className="text-gray-600 dark:text-gray-400">Төлбөрийн багц сонгож, илүү их боломжоор суралцаарай</p>
      </div>

      {/* Current Plan */}
      <Card className="mb-8 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Одоогийн багц</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-900 dark:text-white mb-2">{currentPlan.name}</h3>
              <div className="flex flex-wrap gap-2">
                {currentPlan.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-white dark:bg-gray-800">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl text-blue-600 dark:text-blue-400 mb-1">
                {currentPlan.price.toLocaleString()}₮
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">/ {currentPlan.period}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Period Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 rounded-md transition-colors ${
              billingPeriod === 'monthly'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Сар бүр
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-6 py-2 rounded-md transition-colors relative ${
              billingPeriod === 'yearly'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Жил бүр
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
              Хямдруулалт
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="mb-8">
        <h2 className="text-gray-900 dark:text-white mb-6">Багцууд</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border ${
                plan.popular
                  ? 'border-blue-500 shadow-lg'
                  : plan.recommended
                  ? 'border-green-500'
                  : 'border-gray-200 dark:border-gray-700'
              } relative bg-white dark:bg-gray-800`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Алдартай</Badge>
                </div>
              )}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-green-600 text-white">Санал болгох</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl text-gray-900 dark:text-white">
                    {billingPeriod === 'monthly'
                      ? plan.monthlyPrice.toLocaleString()
                      : plan.yearlyPrice.toLocaleString()}₮
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {' '}/ {billingPeriod === 'monthly' ? 'сар' : 'жил'}
                  </span>
                </div>
                {billingPeriod === 'yearly' && (
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {calculateSavings(plan.monthlyPrice, plan.yearlyPrice)}₮ хэмнэнэ
                    </Badge>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular || plan.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                >
                  Сонгох
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Calendar className="w-5 h-5" />
            Төлбөрийн түүх
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentHistory.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">{payment.plan}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{payment.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white">
                    {payment.amount.toLocaleString()}₮
                  </p>
                  <Badge
                    variant="outline"
                    className={
                      payment.status === 'Идэвхтэй'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }
                  >
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}