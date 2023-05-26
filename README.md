**Читати іншою мовою: [Українська](README.md), [English](README.en.md).**

# Superheroes | Frontend

Це клієнтська частина проекту **Superheroes**. Цей клієнт надає інтерфейс користувача для перегляду
та управління інформацією про супергероїв.

---

# [Жива сторінка](https://yuriipohorilets.github.io/superheroes-test-task_client/)

---

## Огляд додатку

![Огляд сторінки](./assets/prev-3.gif)

## Реалізація проекту

- Проект зібраний за допомогою [create-react-app](https://create-react-app.dev/).
- Компоненти створені з використанням бібліотеки
  [MUI](https://mui.com/material-ui/getting-started/overview/)
- [Backend](https://github.com/YuriiPohorilets/superheroes-test-task_server) реалізовано за
  допомогою [Node.js](https://nodejs.org/en).
- Форми та валідація створені з використанням бібліотек [Formik](https://formik.org/) та
  [Yup](https://github.com/jquense/yup).

### Реалізовано:

1. Головна сторінка `Main`, з коротким описом про додаток
2. Сторінка `Heroes`, на якій відображаються картки з зображеннями та іменами супергероїв
3. Кнопка `Create hero` з можливістю створення нового героя
4. Пагінація як, при запиті на `backend`, так і при відмалюванні карток на сторінці
5. При натисканні на картку, відображається сторінка з детальною інформацією про героя
6. Кнопа `Back` для повернення на попередню сторінку
7. Галерея з усіма зображеннями героя, детальна інформація про героя (nickname, real name,
   descritpion, superpowers, catch phrase)
8. Кнопка `Edit`, яка дає можливіть редагувати дані про героя, додавати та видаляти зображення
9. Кнопка `Delete hero`, яка дає можливіть видалити героя
10. Автоматичне перенаправлення користувача у випадку переходу на неіснуючій `route`

## Стек технологій

[![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)

---

# [Backend repository](https://github.com/YuriiPohorilets/superheroes-test-task_server)
