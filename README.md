# JavaScript Coursework

Решения практических задач по JavaScript — от основ языка до работы с DOM и сетевыми запросами в браузере — и два итоговых проекта.

| Модуль | Папка | Темы |
|---|---|---|
| Основы языка | [`basic-js/`](basic-js/) | функции, массивы, объекты и прототипы, классы и наследование, исключения, замыкания, таймеры, декораторы; проверка решений тестами Jasmine + итоговый проект |
| JavaScript в браузере | [`browser-js/`](browser-js/) | таймеры и обработчики событий, DOM, объект события, изменение структуры документа, XHR-запросы, FormData, localStorage/cookie + итоговый проект |

## Основы языка

В папке каждого задания:

- `task.js` — решение;
- `tests.js` — тесты Jasmine;
- `index.html` — запуск тестов.

| Задание | Что сделано |
|---|---|
| [Основные понятия](basic-js/homeworks/1.base-concepts/) | Решение квадратного уравнения через дискриминант, расчёт общей суммы выплат по ипотеке |
| [Функции](basic-js/homeworks/2.functions/) | min / max / среднее по массиву через rest-параметры; набор функций-обработчиков и функция высшего порядка `makeWork` |
| [Массивы](basic-js/homeworks/3.arrays/) | Сравнение массивов через `every`; средний возраст пользователей заданного пола цепочкой `filter` → `map` → `reduce` |
| [Объекты](basic-js/homeworks/4.objects/) | Функция-конструктор `Student` с методами в прототипе: предмет, оценки, средний балл, отчисление |
| [Классы](basic-js/homeworks/5.classes/) | Иерархия печатных изданий с наследованием и геттером/сеттером `state`; класс `Library` с поиском и выдачей книг; журнал успеваемости по предметам |
| [Исключения и замыкания](basic-js/homeworks/6.exception-closure/) | Парсер чисел с `throw` / `try...catch`; класс `Triangle` с проверкой существования, периметром и площадью по формуле Герона |
| [Асинхронность](basic-js/homeworks/7.async/) | Будильник `AlarmClock`: добавление и удаление звонков, запуск через `setInterval`, остановка и сброс |
| [Декораторы](basic-js/homeworks/8.decorators/) | Кеширующий декоратор с ограничением размера кеша на `Map`; `debounce` с мгновенным первым вызовом и счётчиками вызовов |

## JavaScript в браузере

В папке каждого задания:

- `task.html` — разметка;
- `task.css` — стили;
- `task.js` — решение.

**Возможности JavaScript в браузере** — [`js-features/`](browser-js/homeworks/js-features/)

| Задание | Что сделано |
|---|---|
| [Кликер](browser-js/homeworks/js-features/cookie-clicker/) | Счётчик кликов, анимация размера картинки, скорость кликов в секунду |
| [Таймер обратного отсчёта](browser-js/homeworks/js-features/countdown/) | Обратный отсчёт в формате `чч:мм:сс` на `setTimeout` с действием по окончании |
| [Игра «Убей кротов»](browser-js/homeworks/js-features/mole-game/) | Подсчёт попаданий и промахов, условия победы и поражения |

**Объект события** — [`event-object/`](browser-js/homeworks/event-object/)

| Задание | Что сделано |
|---|---|
| [Выпадающий список](browser-js/homeworks/event-object/dropdown/) | Открытие списка и выбор значения с `preventDefault` и `stopPropagation` |
| [Вкладки](browser-js/homeworks/event-object/tabs/) | Переключение вкладок и связанного контента |
| [Соло на клавиатуре](browser-js/homeworks/event-object/keysolo/) | Игра на скорость набора слов: обработка `keydown`, счёт побед и поражений, таймер на каждое слово |

**DOM** — [`dom/`](browser-js/homeworks/dom/)

| Задание | Что сделано |
|---|---|
| [Ротатор рекламы](browser-js/homeworks/dom/ads/) | Циклическая смена фраз со скоростью и цветом из `data`-атрибутов |
| [Онлайн-читалка](browser-js/homeworks/dom/book-reader/) | Переключение размера шрифта, цвета текста и фона через классы |
| [Появление при прокрутке](browser-js/homeworks/dom/reveal/) | Показ блоков при попадании в область видимости через `getBoundingClientRect` |

**Изменение структуры документа** — [`document-structure/`](browser-js/homeworks/document-structure/)

| Задание | Что сделано |
|---|---|
| [Список дел](browser-js/homeworks/document-structure/todo/) | Добавление и удаление задач с сохранением в localStorage |
| [Всплывающая подсказка](browser-js/homeworks/document-structure/tooltip/) | Создание подсказки рядом с элементом и её позиционирование по координатам |
| [Корзина товаров](browser-js/homeworks/document-structure/cart/) | Выбор количества, добавление в корзину с анимацией полёта картинки, удаление, сохранение корзины в localStorage |

**Асинхронные запросы** — [`async-requests/`](browser-js/homeworks/async-requests/)

| Задание | Что сделано |
|---|---|
| [Анимация загрузки](browser-js/homeworks/async-requests/preloader/) | Загрузка курсов валют через XHR с прелоадером и кешированием ответа в localStorage на минуту |
| [Опрос](browser-js/homeworks/async-requests/poll/) | Загрузка опроса GET-запросом, отправка голоса POST-запросом, вывод результатов в процентах |
| [Загрузка файла](browser-js/homeworks/async-requests/progressbar/) | Отправка файла через `FormData` с индикатором прогресса `xhr.upload.onprogress` |

**Хранение состояния на клиенте** — [`client-state/`](browser-js/homeworks/client-state/)

| Задание | Что сделано |
|---|---|
| [Текстовый редактор](browser-js/homeworks/client-state/text-editor/) | Автосохранение текста в localStorage и восстановление после перезагрузки |
| [Всплывающее окно](browser-js/homeworks/client-state/popup/) | Модальное окно, которое после закрытия не показывается повторно благодаря cookie |
| [Авторизация](browser-js/homeworks/client-state/auth/) | Вход через POST-запрос с JSON, хранение `user_id` в localStorage, выход |

## Итоговые проекты

### Биржа внутренней валюты — [`basic-js/diploma/`](basic-js/diploma/)

Личный кабинет пользователя биржи: вход и регистрация, профиль с балансом, курсы валют, пополнение счёта, конвертация и перевод средств, список избранных пользователей. Готовые UI-классы и API-коннектор были частью проекта; моя часть — связать их в [`loginPage.js`](basic-js/diploma/public/loginPage.js) и [`homePage.js`](basic-js/diploma/public/homePage.js) через колбэки и обработку ответов сервера.

Технологии: JavaScript, Semantic UI, jQuery; сервер — Node.js, Express, lowdb.

### Учёт личных финансов — [`browser-js/diploma/`](browser-js/diploma/)

Одностраничное приложение: регистрация, вход и выход, создание и удаление счетов, добавление доходов и расходов, просмотр и удаление транзакций по счёту. Реализованы обёртка над XHR (`createRequest`), API-классы с наследованием (`Entity` → `Account`, `Transaction`), классы `User`, модальные окна, асинхронные формы, виджеты и страница транзакций — всё в [`public/js/`](browser-js/diploma/public/js/).

Технологии: JavaScript (классы, XHR, FormData, localStorage), Bootstrap 3, AdminLTE; сервер — Node.js, Express, lowdb.

## Как запустить

**Задания по основам языка.** Открыть `index.html` в папке задания — в браузере запустятся тесты Jasmine и покажут результат. Для журнала успеваемости в `5.classes` отдельные тесты — `student_tests.html`.

**Задания по браузеру.** Открыть `task.html` в папке задания. Лучше через локальный сервер (например, Live Server в VS Code): задание с cookie не работает при открытии файла напрямую. Задания из `async-requests/` и `client-state/auth/` обращаются к внешнему учебному API и без него не работают.

**Итоговые проекты.** Нужен Node.js.

```bash
cd basic-js/diploma      # или browser-js/diploma
cp .env.example .env
npm install
npm start
```

Файл `.env` обязателен: из него сервер берёт порт и путь к статике. В репозитории лежит только шаблон `.env.example` — перед первым запуском скопируйте его в `.env`.

Сервер стартует на http://localhost:8000. Порт задан в `.env`, у обоих проектов он одинаковый — чтобы запустить их одновременно, передайте другой порт: `PORT=8001 npm start`. Для биржи есть тестовый пользователь `oleg@demo.ru` / `demo`.

## Стек

![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6%2B-F7DF1E?style=flat&logo=javascript&logoColor=black) ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![DOM API](https://img.shields.io/badge/DOM_API-555555?style=flat) ![XMLHttpRequest](https://img.shields.io/badge/XMLHttpRequest-555555?style=flat) ![localStorage](https://img.shields.io/badge/localStorage-555555?style=flat) ![cookie](https://img.shields.io/badge/cookie-555555?style=flat) ![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=flat&logo=jasmine&logoColor=white) ![Node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=5FA04E&style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![lowdb](https://img.shields.io/badge/lowdb-555555?style=flat) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) ![AdminLTE](https://img.shields.io/badge/AdminLTE-3C8DBC?style=flat) ![Semantic UI](https://img.shields.io/badge/Semantic_UI-35BDB2?style=flat&logo=semanticuireact&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
