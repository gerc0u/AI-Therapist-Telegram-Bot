import { CheckCircle, Sparkles, Trophy } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Slide8() {
  const achievements = [
    'Бот интегрирован с AI (Gemini)',
    'Работает с базой данных PostgreSQL',
    'Реализованы все команды и хранение истории',
    'Поддерживается форматирование ответов',
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Trophy className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Итоги и тестирование</h1>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300 flex items-center gap-4"
            >
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-800">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-8 text-white shadow-2xl">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3">
            <Sparkles className="h-8 w-8" />
            <h2>Результат:</h2>
            <Sparkles className="h-8 w-8" />
          </div>
          <p className="text-xl">
            Готовый Telegram-бот-психолог, который умеет общаться, давать советы и запоминать взаимодействие.
          </p>
        </div>
      </div>

      {/* Features Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-200">
          <h3 className="text-indigo-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            Возможности бота
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Общение как психолог
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              AI-генерация ответов
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Советы и шутки
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Отслеживание настроения
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
          <h3 className="text-purple-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💾</span>
            Хранение данных
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              История диалогов
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Личные заметки
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Данные пользователей
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Временные метки
            </li>
          </ul>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="text-center space-y-4">
        <p className="text-gray-600">Стек технологий:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-blue-500 hover:bg-blue-600">Python</Badge>
          <Badge className="bg-cyan-500 hover:bg-cyan-600">Telebot</Badge>
          <Badge className="bg-indigo-500 hover:bg-indigo-600">PostgreSQL</Badge>
          <Badge className="bg-purple-500 hover:bg-purple-600">Google Gemini AI</Badge>
          <Badge className="bg-pink-500 hover:bg-pink-600">psycopg2</Badge>
        </div>
      </div>
    </div>
  );
}
