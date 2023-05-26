**Read in another language: [Українська](README.md), [English](README.en.md).**

# Superheroes | Frontend

This is the client part of the **Superheroes** project. This client provides a user interface for
browsing and superhero information management.

---

# [View a demo](https://yuriipohorilets.github.io/superheroes-test-task_client/)

---

## App view

![App view](./assets/prev-3.gif)

## Implementation of the project

- The project was compiled with [create-react-app](https://create-react-app.dev/).
- Components are created using the library
  [MUI](https://mui.com/material-ui/getting-started/overview/)
- [Backend](https://github.com/YuriiPohorilets/superheroes-test-task_server) is implemented using
  [Node.js](https://nodejs.org/en).
- Forms and validation are built using libraries [Formik](https://formik.org/) and
  [Yup](https://github.com/jquense/yup).

### Implemented:

1. `Main` page, with a short description about the application
2. `Heroes` page, which displays cards with images and names of superheroes
3. `Create hero` button with the possibility of creating a new hero
4. Pagination both when requesting the `backend` and when drawing cards on the page
5. When you click on the card, a page with detailed information about the hero is displayed
6. `Back` button to return to the previous page
7. Gallery with all images of the hero, detailed information about the hero (nickname, real name,
   description, superpowers, catch phrase)
8. `Edit` button, which allows you to edit data about the hero, add and delete images
9. `Delete hero` button, allows you to delete a hero
10. Automatic redirection of the user in case of switching to non-existent `route`

## Tech stack

[![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)

---

# [Backend repository](https://github.com/YuriiPohorilets/superheroes-test-task_server)
