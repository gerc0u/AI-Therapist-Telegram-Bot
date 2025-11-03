import { Code, Package } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Slide3() {
  const technologies = [
    {
      name: 'telebot',
      description: 'обработка сообщений Telegram',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'psycopg2',
      description: 'работа с PostgreSQL',
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
    {
      name: 'google.generativeai',
      description: 'подключение модели Gemini',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      name: 'datetime, random, re',
      description: 'работа с датами, случайными советами и форматированием',
      color: 'bg-pink-500 hover:bg-pink-600',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Code className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Используемые технологии</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Package className="h-6 w-6 text-purple-600" />
          <h3 className="text-purple-900">Основные библиотеки и сервисы:</h3>
        </div>

        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] duration-300"
            >
              <div className="flex items-start gap-4">
                <Badge className={`${tech.color} flex-shrink-0`}>
                  {tech.name}
                </Badge>
                <p className="text-gray-700 flex-1">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Visual */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center">
          <div className="text-blue-600 mb-2">🐍</div>
          <p className="text-gray-700">Python</p>
        </div>
        <div className="bg-white border-2 border-cyan-200 rounded-lg p-4 text-center">
          <div className="text-cyan-600 mb-2">✈️</div>
          <p className="text-gray-700">Telegram</p>
        </div>
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 text-center">
          <div className="text-indigo-600 mb-2">🐘</div>
          <p className="text-gray-700">PostgreSQL</p>
        </div>
        <div className="bg-white border-2 border-purple-200 rounded-lg p-4 text-center">
          <div className="text-purple-600 mb-2">✨</div>
          <p className="text-gray-700">Gemini AI</p>
        </div>
      </div>
    </div>
  );
}
