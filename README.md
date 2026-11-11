# JavaScript Coursework

Решения практических задач по JavaScript — от основ языка до работы с DOM и сетевыми запросами в браузере — и два итоговых проекта.

<table>
  <tr>
    <th width="170" align="left">Модуль</th>
    <th width="140" align="left">Папка</th>
    <th width="490" align="left">Темы</th>
  </tr>
  <tr>
    <td>Основы языка</td>
    <td><a href="basic-js/"><code>basic‑js/</code></a></td>
    <td>функции, массивы, объекты и прототипы, классы и наследование, исключения, замыкания, таймеры, декораторы; проверка решений тестами Jasmine + итоговый проект</td>
  </tr>
  <tr>
    <td>JavaScript в браузере</td>
    <td><a href="browser-js/"><code>browser‑js/</code></a></td>
    <td>таймеры и обработчики событий, DOM, объект события, изменение структуры документа, XHR-запросы, FormData, localStorage/cookie + итоговый проект</td>
  </tr>
</table>

## Основы языка

В папке каждого задания:

- `task.js` — решение;
- `tests.js` — тесты Jasmine;
- `index.html` — запуск тестов.

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/1.base-concepts/">Основные понятия</a></td>
    <td>Решение квадратного уравнения через дискриминант, расчёт общей суммы выплат по ипотеке</td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/2.functions/">Функции</a></td>
    <td>min / max / среднее по массиву через rest-параметры; набор функций-обработчиков и функция высшего порядка <code>makeWork</code></td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/3.arrays/">Массивы</a></td>
    <td>Сравнение массивов через <code>every</code>; средний возраст пользователей заданного пола цепочкой <code>filter</code> → <code>map</code> → <code>reduce</code></td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/4.objects/">Объекты</a></td>
    <td>Функция-конструктор <code>Student</code> с методами в прототипе: предмет, оценки, средний балл, отчисление</td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/5.classes/">Классы</a></td>
    <td>Иерархия печатных изданий с наследованием и геттером/сеттером <code>state</code>; класс <code>Library</code> с поиском и выдачей книг; журнал успеваемости по предметам</td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/6.exception-closure/">Исключения и замыкания</a></td>
    <td>Парсер чисел с <code>throw</code> / <code>try...catch</code>; класс <code>Triangle</code> с проверкой существования, периметром и площадью по формуле Герона</td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/7.async/">Асинхронность</a></td>
    <td>Будильник <code>AlarmClock</code>: добавление и удаление звонков, запуск через <code>setInterval</code>, остановка и сброс</td>
  </tr>
  <tr>
    <td><a href="basic-js/homeworks/8.decorators/">Декораторы</a></td>
    <td>Кеширующий декоратор с ограничением размера кеша на <code>Map</code>; <code>debounce</code> с мгновенным первым вызовом и счётчиками вызовов</td>
  </tr>
</table>

## JavaScript в браузере

В папке каждого задания:

- `task.html` — разметка;
- `task.css` — стили;
- `task.js` — решение.

**Возможности JavaScript в браузере** — [`js-features/`](browser-js/homeworks/js-features/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/js-features/cookie-clicker/">Кликер</a></td>
    <td>Счётчик кликов, анимация размера картинки, скорость кликов в секунду</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/js-features/countdown/">Таймер обратного отсчёта</a></td>
    <td>Обратный отсчёт в формате <code>чч:мм:сс</code> на <code>setTimeout</code> с действием по окончании</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/js-features/mole-game/">Игра «Убей кротов»</a></td>
    <td>Подсчёт попаданий и промахов, условия победы и поражения</td>
  </tr>
</table>

**Объект события** — [`event-object/`](browser-js/homeworks/event-object/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/event-object/dropdown/">Выпадающий список</a></td>
    <td>Открытие списка и выбор значения с <code>preventDefault</code> и <code>stopPropagation</code></td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/event-object/tabs/">Вкладки</a></td>
    <td>Переключение вкладок и связанного контента</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/event-object/keysolo/">Соло на клавиатуре</a></td>
    <td>Игра на скорость набора слов: обработка <code>keydown</code>, счёт побед и поражений, таймер на каждое слово</td>
  </tr>
</table>

**DOM** — [`dom/`](browser-js/homeworks/dom/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/dom/ads/">Ротатор рекламы</a></td>
    <td>Циклическая смена фраз со скоростью и цветом из <code>data</code>-атрибутов</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/dom/book-reader/">Онлайн-читалка</a></td>
    <td>Переключение размера шрифта, цвета текста и фона через классы</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/dom/reveal/">Появление при прокрутке</a></td>
    <td>Показ блоков при попадании в область видимости через <code>getBoundingClientRect</code></td>
  </tr>
</table>

**Изменение структуры документа** — [`document-structure/`](browser-js/homeworks/document-structure/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/document-structure/todo/">Список дел</a></td>
    <td>Добавление и удаление задач с сохранением в localStorage</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/document-structure/tooltip/">Всплывающая подсказка</a></td>
    <td>Создание подсказки рядом с элементом и её позиционирование по координатам</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/document-structure/cart/">Корзина товаров</a></td>
    <td>Выбор количества, добавление в корзину с анимацией полёта картинки, удаление, сохранение корзины в localStorage</td>
  </tr>
</table>

**Асинхронные запросы** — [`async-requests/`](browser-js/homeworks/async-requests/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/async-requests/preloader/">Анимация загрузки</a></td>
    <td>Загрузка курсов валют через XHR с прелоадером и кешированием ответа в localStorage на минуту</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/async-requests/poll/">Опрос</a></td>
    <td>Загрузка опроса GET-запросом, отправка голоса POST-запросом, вывод результатов в процентах</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/async-requests/progressbar/">Загрузка файла</a></td>
    <td>Отправка файла через <code>FormData</code> с индикатором прогресса <code>xhr.upload.onprogress</code></td>
  </tr>
</table>

**Хранение состояния на клиенте** — [`client-state/`](browser-js/homeworks/client-state/)

<table>
  <tr>
    <th width="230" align="left">Задание</th>
    <th width="570" align="left">Что сделано</th>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/client-state/text-editor/">Текстовый редактор</a></td>
    <td>Автосохранение текста в localStorage и восстановление после перезагрузки</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/client-state/popup/">Всплывающее окно</a></td>
    <td>Модальное окно, которое после закрытия не показывается повторно благодаря cookie</td>
  </tr>
  <tr>
    <td><a href="browser-js/homeworks/client-state/auth/">Авторизация</a></td>
    <td>Вход через POST-запрос с JSON, хранение <code>user_id</code> в localStorage, выход</td>
  </tr>
</table>

## Итоговые проекты

### Биржа внутренней валюты — [`basic-js/diploma/`](basic-js/diploma/)

Личный кабинет пользователя биржи: вход и регистрация, профиль с балансом, курсы валют, пополнение счёта, конвертация и перевод средств, список избранных пользователей. Готовые UI-классы и API-коннектор были частью проекта; моя часть — связать их в [`loginPage.js`](basic-js/diploma/public/loginPage.js) и [`homePage.js`](basic-js/diploma/public/homePage.js) через колбэки и обработку ответов сервера.

**Клиент:** ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Semantic UI](https://img.shields.io/badge/Semantic_UI-35BDB2?style=flat&logo=semanticuireact&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)

**Сервер:** ![Node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=5FA04E&style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![lowdb](https://img.shields.io/badge/lowdb-555555?style=flat)

### Учёт личных финансов — [`browser-js/diploma/`](browser-js/diploma/)

Одностраничное приложение: регистрация, вход и выход, создание и удаление счетов, добавление доходов и расходов, просмотр и удаление транзакций по счёту. Реализованы обёртка над XHR (`createRequest`), API-классы с наследованием (`Entity` → `Account`, `Transaction`), классы `User`, модальные окна, асинхронные формы, виджеты и страница транзакций — всё в [`public/js/`](browser-js/diploma/public/js/).

**Клиент:** ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![XMLHttpRequest](https://img.shields.io/badge/XMLHttpRequest-555555?style=flat) ![FormData](https://img.shields.io/badge/FormData-555555?style=flat) ![localStorage](https://img.shields.io/badge/localStorage-555555?style=flat) ![Bootstrap 3](https://img.shields.io/badge/Bootstrap_3-7952B3?style=flat&logo=bootstrap&logoColor=white) ![AdminLTE](https://img.shields.io/badge/AdminLTE-3C8DBC?style=flat)

**Сервер:** ![Node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=5FA04E&style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![lowdb](https://img.shields.io/badge/lowdb-555555?style=flat)

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

Файл `.env` обязателен: из него сервер берёт порт, путь к статике и ключи подписи сессий (`SESSION_KEYS`). В репозитории лежит только шаблон `.env.example` — перед первым запуском скопируйте его в `.env` и замените значения `SESSION_KEYS` на свои.

База `db.json` создаётся при первом запуске и заполняется демо-данными; в git она не хранится.

Сервер стартует на http://localhost:8000. Порт задан в `.env`, у обоих проектов он одинаковый — чтобы запустить их одновременно, передайте другой порт: `PORT=8001 npm start`.

Тестовые пользователи:

| Проект | Логин | Пароль |
|---|---|---|
| Биржа внутренней валюты | `oleg@demo.ru` | `demo` |
| Учёт личных финансов | `demo@demo` | `demo` |

## Стек

![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6%2B-F7DF1E?style=flat&logo=javascript&logoColor=black) ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![DOM API](https://img.shields.io/badge/DOM_API-555555?style=flat) ![XMLHttpRequest](https://img.shields.io/badge/XMLHttpRequest-555555?style=flat) ![localStorage](https://img.shields.io/badge/localStorage-555555?style=flat) ![cookie](https://img.shields.io/badge/cookie-555555?style=flat) ![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=flat&logo=jasmine&logoColor=white) ![Node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=5FA04E&style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![lowdb](https://img.shields.io/badge/lowdb-555555?style=flat) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) ![AdminLTE](https://img.shields.io/badge/AdminLTE-3C8DBC?style=flat) ![Semantic UI](https://img.shields.io/badge/Semantic_UI-35BDB2?style=flat&logo=semanticuireact&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
