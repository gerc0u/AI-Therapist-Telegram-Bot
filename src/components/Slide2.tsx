import { Target, MessageCircle, Brain, Database, Command } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Target className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Цель проекта</h1>
        </div>
      </div>

      {/* Main Description */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <p className="text-gray-700 text-center mb-8">
          Создать Telegram-бота, который:
        </p>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-indigo-900 mb-2">Общение как психолог</h3>
                <p className="text-gray-600">
                  Общается с пользователем как профессиональный психолог
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-purple-900 mb-2">AI для генерации</h3>
                <p className="text-gray-600">
                  Использует искусственный интеллект для генерации ответов
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                <Database className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-pink-900 mb-2">Хранение данных</h3>
                <p className="text-gray-600">
                  Хранит историю диалогов и заметки пользователей
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 rounded-full p-3 flex-shrink-0">
                <Command className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-cyan-900 mb-2">Команды взаимодействия</h3>
                <p className="text-gray-600">
                  Поддерживает команды для удобного взаимодействия
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
