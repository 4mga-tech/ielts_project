import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronRight, ChevronLeft, LayoutDashboard, FileText, CreditCard, User, Settings } from 'lucide-react';

interface OnboardingGuideProps {
  open: boolean;
  onClose: () => void;
}

export default function OnboardingGuide({ open, onClose }: OnboardingGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Тавтай морилно уу!',
      description: 'IELTS Заавар платформд тавтай морилно уу. Энэ товч заавар танд системийн үндсэн боломжуудтай танилцуулах болно.',
      icon: '👋',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Хяналтын самбар',
      description: 'Хяналтын самбараас та өөрийн ахиц дэвшил, сүүлд хийсэн тестүүд болон зөвлөмжүүдийг харах боломжтой.',
      icon: LayoutDashboard,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Тестүүд',
      description: 'Listening, Reading, Writing, Speaking гэх мэт бүх хэсгүүдийн дасгал тестүүдийг энд олно.',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Төлбөр',
      description: 'Премиум багцууд, төлбөрийн түүх болон багцын мэдээллийг энд үзэх боломжтой.',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Профайл',
      description: 'Хувийн мэдээлэл, зураг болон бусад тохиргоогоо энд засварлана уу.',
      icon: User,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Тохиргоо',
      description: 'Харанхуй горим, мэдэгдэл болон бусад системийн тохиргоог өөрчлөх боломжтой.',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Амжилт хүсье!',
      description: 'Бэлэн боллоо! Та одоо IELTS шалгалтандаа бэлтгэх бүх боломжтой. Амжилт хүсье! 🎯',
      icon: '🚀',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    onClose();
  };

  const handleSkip = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && handleSkip()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-gray-900">
            {currentStepData.title}
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Icon */}
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${currentStepData.color} flex items-center justify-center`}>
            {typeof currentStepData.icon === 'string' ? (
              <span className="text-4xl">{currentStepData.icon}</span>
            ) : (
              <currentStepData.icon className="w-12 h-12 text-white" />
            )}
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 mb-6">
            {currentStepData.description}
          </p>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8 bg-blue-600'
                    : index < currentStep
                    ? 'w-2 bg-blue-400'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex-1"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Өмнөх
              </Button>
            )}
            
            {currentStep === 0 && (
              <Button
                variant="outline"
                onClick={handleSkip}
                className="flex-1"
              >
                Алгасах
              </Button>
            )}

            <Button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              {currentStep === steps.length - 1 ? (
                'Эхлэх'
              ) : (
                <>
                  Дараах
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
