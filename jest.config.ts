const config = {
  // Настройка пресета для TypeScript
  preset: "ts-jest",

  // Указание корня проекта
  rootDir: "./",

  // Указание путей к тестовым файлам
  roots: ["./src"],

  // Добавление расширений файлов для поиска модулей
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jsdom",
  // Маппинг расширений файлов на модули
  // moduleNameMapper: {
  //   '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  // },

  // Использование Jest в режиме мокирования модулей
  // automock: false,

  // Отключение сброса моков перед каждым тестом
  // resetMocks: true,

  // Добавление путей к файлам с настройками перед запуском тестов
  setupFilesAfterEnv: ["./setupTests.ts"],

  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@containers(.*)$": "<rootDir>/src/containers$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
  },

  coveragePathIgnorePatterns: ["/node_modules/", "index.ts"],
  // Добавление путей к глобальным setup-файлам
  // globalSetup: './jest.globalSetup.js',

  // Добавление путей к глобальным teardown-файлам
  // globalTeardown: './jest.globalTeardown.js',

  // Отображение информации о покрытии тестами
  // coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // Добавление путей к файлам для исключения из покрытия
  // coveragePathIgnorePatterns: ['node_modules'],

  // Добавление путей к директориям для исключения из покрытия
  // coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Автоматическое обнуление вызовов моков перед каждым тестом
  // clearMocks: true,

  // Использование снимков для хранения результатов тестов
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-raw'],

  // Использование таймеров для отслеживания медленных тестов
  // slowTestThreshold: 5,

  // Включение отслеживания медленных тестов
  // watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Установка окружения тестов
  // testEnvironment: "jsdom",

  // Опции для окружения тестов
  // testEnvironmentOptions: {},

  // Расширение для тестов
  // testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],

  // Игнорирование папки node_modules
  // testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Показ локации тестов
  // testLocationInResults: true,

  // Сериализаторы снимков
  // snapshotSerializers: ['jest-serializer-path', 'jest-serializer-raw'],

  // Список сериализаторов
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-raw'],

  // Маппинг расширений файлов
  // moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};

export default config;
