import { Brain, MessageCircle, Database, Sparkles, User, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Slide1() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Author Info */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6" />
            <div>
              <p className="opacity-90">Имя:</p>
              <p>Кусаинов Жангир</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6" />
            <div>
              <p className="opacity-90">Группа:</p>
              <p>ПО2410</p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Brain className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Тема проекта</h1>
        </div>
        <h2 className="text-purple-600">AI Therapist — бот-психолог с искусственным интеллектом</h2>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 space-y-6">
        <div className="flex items-start gap-4">
          <MessageCircle className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">
            Проект создан для общения с пользователем, оказания эмоциональной поддержки и сохранения данных взаимодействия в базе данных.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Sparkles className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-700 mb-3">Используются технологии:</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-500 hover:bg-blue-600">Python</Badge>
              <Badge className="bg-cyan-500 hover:bg-cyan-600">Telebot</Badge>
              <Badge className="bg-indigo-500 hover:bg-indigo-600">PostgreSQL</Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600">Google Gemini AI</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
          <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-gray-700">Эмоциональная поддержка</p>
        </div>
        <div className="bg-white border-2 border-purple-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
          <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <p className="text-gray-700">AI-генерация ответов</p>
        </div>
        <div className="bg-white border-2 border-pink-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
          <Database className="h-8 w-8 text-pink-600 mx-auto mb-2" />
          <p className="text-gray-700">Хранение истории</p>
        </div>
      </div>
    </div>
  );
}
