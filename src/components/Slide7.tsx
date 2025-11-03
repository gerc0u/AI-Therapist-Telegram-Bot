import { Database, Save, Code2, FileText } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Database className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Работа с БД</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Description */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Save className="h-6 w-6 text-purple-600" />
            <h3 className="text-purple-900">Сохранение запросов и ответов:</h3>
          </div>
        </div>

        {/* SQL Code Block */}
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto shadow-2xl">
          <pre className="text-green-400">
            <code>{`cursor.execute('''
    INSERT INTO requests (user_id, question, answer, timestamp)
    VALUES (%s, %s, %s, %s)
''', (message.from_user.id, 
      question, 
      answer, 
      datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
conn.commit()`}</code>
          </pre>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-indigo-500">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-indigo-600" />
              <h3 className="text-indigo-900">Хранение истории</h3>
            </div>
            <p className="text-gray-700">
              Все запросы сохраняются в таблице <code className="bg-gray-100 px-2 py-1 rounded">requests</code> и выводятся через команду <code className="bg-gray-100 px-2 py-1 rounded">/history</code>
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-8 w-8 text-purple-600" />
              <h3 className="text-purple-900">PostgreSQL</h3>
            </div>
            <p className="text-gray-700">
              Используется библиотека <code className="bg-gray-100 px-2 py-1 rounded">psycopg2</code> для взаимодействия с базой данных
            </p>
          </div>
        </div>

        {/* Data Flow */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
          <h3 className="text-center mb-6">Поток данных:</h3>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-center flex-1 min-w-[150px]">
              <div className="bg-white/20 rounded-lg p-4 mb-2">
                <div className="text-3xl mb-2">👤</div>
                <p>Пользователь отправляет запрос</p>
              </div>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="bg-white/20 rounded-lg p-4 mb-2">
                <div className="text-3xl mb-2">🧠</div>
                <p>AI генерирует ответ</p>
              </div>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="bg-white/20 rounded-lg p-4 mb-2">
                <div className="text-3xl mb-2">💾</div>
                <p>Сохранение в БД</p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Tables */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg mb-2">
                users
              </div>
              <p className="text-gray-600">Данные пользователей</p>
            </div>
            <div>
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg mb-2">
                requests
              </div>
              <p className="text-gray-600">История запросов</p>
            </div>
            <div>
              <div className="bg-pink-500 text-white px-4 py-2 rounded-lg mb-2">
                notes
              </div>
              <p className="text-gray-600">Заметки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
