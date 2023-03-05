# Shopping Cart Exercise

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

This repo contains the second version of the shopping cart exercise from my MIT Full Stack development course.

<!-- Live demo [here](https://mike-veilleux.github.io/Shopping-Cart-Exercise/) -->

<img src="https://github.com/Mike-Veilleux/Shopping-Cart-Exercise/blob/main/client/src/assets/screenshot_ShoppingCart_V2.png">

## Description

A simple shopping cart app using React, Axios, Bootstrap, Strapi and Vite toolchain. This exercise targets a few skills building

- Connect front and back end
- Handle restocking from backend
- Handle cart and stock quantities
- Use of React hooks
- Custom hooks
- Passing hooks as props to components

## Install

**IMPORTANT**
You should have a local Strapi DB server running with a data table structured as follow:

- name As string
- country As string
- cost As number
- instock As number

Clone or download this repo, go to the **client** folder and run the following commands from a terminal window:

Install dependencies

```
npm install
```

Run project

```
npm run dev
```

## Licensing

This project is under MIT license.
