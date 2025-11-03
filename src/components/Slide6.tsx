import { Sparkles, Brain, Code2, Zap } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Sparkles className="h-16 w-16 text-indigo-600" />
          <h1 className="text-indigo-600">Интеграция AI (Google Gemini)</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Code Block 1 */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-6 w-6 text-purple-600" />
            <h3 className="text-purple-900">Подключение модели:</h3>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400">
              <code>{`model = genai.GenerativeModel("gemini-2.5-flash")
response = model.generate_content(
    f"Ты психолог, ответь с добротой и эмпатией на вопрос: {question}"
)
answer = response.text`}</code>
            </pre>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-purple-600" />
              <h3 className="text-purple-900">Умные ответы</h3>
            </div>
            <p className="text-gray-700">
              Бот использует ИИ для генерации осмысленных и доброжелательных ответов.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-pink-600" />
              <h3 className="text-pink-900">Форматирование</h3>
            </div>
            <p className="text-gray-700">
              Текст между ** автоматически выделяется жирным с помощью регулярных выражений.
            </p>
          </div>
        </div>

        {/* Code Block 2 */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-6 w-6 text-pink-600" />
            <h3 className="text-pink-900">Форматирование текста:</h3>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400">
              <code>{`answer = re.sub(r'\\*\\*(.*?)\\*\\*', r'<b>\\1</b>', answer)`}</code>
            </pre>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl mb-2">📝</div>
              <p>Вопрос пользователя</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl mb-2">🧠</div>
              <p>Gemini AI</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl mb-2">✨</div>
              <p>Форматирование</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center flex-1 min-w-[120px]">
              <div className="text-3xl mb-2">💬</div>
              <p>Ответ пользователю</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
