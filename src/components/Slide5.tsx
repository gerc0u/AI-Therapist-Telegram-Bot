import { Terminal, Play, HelpCircle, Lightbulb, Smile, Heart, MessageCircle, Plus, History, Trash2 } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Slide5() {
  const commands = [
    {
      command: '/start',
      description: 'приветствие и регистрация пользователя',
      icon: Play,
      color: 'bg-green-500',
    },
    {
      command: '/help',
      description: 'список доступных команд',
      icon: HelpCircle,
      color: 'bg-blue-500',
    },
    {
      command: '/advice',
      description: 'случайный совет',
      icon: Lightbulb,
      color: 'bg-yellow-500',
    },
    {
      command: '/joke',
      description: 'шутка о психологах',
      icon: Smile,
      color: 'bg-orange-500',
    },
    {
      command: '/mood',
      description: 'выбор настроения',
      icon: Heart,
      color: 'bg-pink-500',
    },
    {
      command: '/ask',
      description: 'задать вопрос AI (через Gemini)',
      icon: MessageCircle,
      color: 'bg-purple-500',
    },
    {
      command: '/add',
      description: 'добавить заметку',
      icon: Plus,
      color: 'bg-cyan-500',
    },
    {
      command: '/history',
      description: 'показать последние запросы',
      icon: History,
      color: 'bg-indigo-500',
    },
    {
      command: '/clear',
      description: 'очистить историю',
      icon: Trash2,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Terminal className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Основные команды</h1>
        </div>
      </div>

      {/* Commands Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {commands.map((cmd, index) => {
          const Icon = cmd.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300 border-l-4 border-indigo-500"
            >
              <div className="flex items-start gap-3">
                <div className={`${cmd.color} rounded-lg p-2 flex-shrink-0`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2">
                    {cmd.command}
                  </Badge>
                  <p className="text-gray-600">
                    {cmd.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Command Categories */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Play className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-green-900 mb-2">Начало работы</h3>
            <p className="text-gray-600">/start, /help</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-purple-900 mb-2">Взаимодействие</h3>
            <p className="text-gray-600">/ask, /mood, /advice</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <History className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-indigo-900 mb-2">Управление данными</h3>
            <p className="text-gray-600">/add, /history, /clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
