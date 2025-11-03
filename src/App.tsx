import { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Target, Code, Database, Terminal, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: Slide1, icon: Brain },
    { component: Slide2, icon: Target },
    { component: Slide3, icon: Code },
    { component: Slide4, icon: Database },
    { component: Slide5, icon: Terminal },
    { component: Slide6, icon: Sparkles },
    { component: Slide7, icon: Database },
    { component: Slide8, icon: CheckCircle },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Presentation Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          {/* Slide Content */}
          <div className="min-h-[600px] p-8 md:p-12">
            <CurrentSlideComponent />
          </div>

          {/* Navigation Footer */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="ghost"
                className="text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Назад
              </Button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => {
                  const Icon = slide.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-white text-indigo-600 p-2 rounded-lg shadow-lg scale-110'
                          : 'bg-white/30 text-white/70 p-1.5 rounded-lg hover:bg-white/40'
                      }`}
                      title={`Слайд ${index + 1}`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="ghost"
                className="text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Вперёд
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-white/90">
              Слайд {currentSlide + 1} из {slides.length}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
