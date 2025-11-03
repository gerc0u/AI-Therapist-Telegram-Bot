import { Database, Table, Users, FileText } from 'lucide-react';

export default function Slide4() {
  const tables = [
    {
      name: 'users',
      icon: Users,
      color: 'indigo',
      description: 'хранит данные о пользователях',
      fields: ['id', 'username', 'first_name', 'last_activity'],
    },
    {
      name: 'requests',
      icon: Table,
      color: 'purple',
      description: 'хранит вопросы и ответы AI',
      fields: ['user_id', 'question', 'answer', 'timestamp'],
    },
    {
      name: 'notes',
      icon: FileText,
      color: 'pink',
      description: 'личные заметки пользователя',
      fields: ['user_id', 'text', 'date'],
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Database className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Структура базы данных</h1>
        </div>
        <p className="text-gray-600">
          В PostgreSQL создаются три таблицы:
        </p>
      </div>

      {/* Tables Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {tables.map((table, index) => {
          const Icon = table.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br from-${table.color}-50 to-${table.color}-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 border-2 border-${table.color}-200`}
            >
              {/* Table Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`bg-${table.color}-500 rounded-lg p-2`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-${table.color}-900`}>{table.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4">
                {table.description}
              </p>

              {/* Fields */}
              <div className="bg-white rounded-lg p-4 space-y-2">
                {table.fields.map((field, fieldIndex) => (
                  <div
                    key={fieldIndex}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${table.color}-500`}></div>
                    <code className="text-gray-800">{field}</code>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Database Schema Visualization */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="bg-indigo-500 text-white px-6 py-3 rounded-lg mb-2">
              users
            </div>
            <div className="text-gray-600">👤 Пользователи</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="bg-purple-500 text-white px-6 py-3 rounded-lg mb-2">
              requests
            </div>
            <div className="text-gray-600">💬 Запросы</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="bg-pink-500 text-white px-6 py-3 rounded-lg mb-2">
              notes
            </div>
            <div className="text-gray-600">📝 Заметки</div>
          </div>
        </div>
      </div>
    </div>
  );
}
