# DeCryptor

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**DeCryptor** is an online community where crypto traders and enthusiasts can engage in a discussion and share their thoughts on the the most popular cryptocurrencies.


<br>

## MVP

The **DeCryptor** MVP is a fullstack web application made with Ruby on Rails and React, where users can sign-up/login, view a list of top cryptocurrencies, and create/edit/delete posts on the details page of a specific cryptocurrency. Non-users can also view the cryptocurrencies and posts but cannot create/edit/delete posts.

<br>

### Goals

- Ruby on Rails Backend
- Users, Cryptocurrencies, and Posts tables
- React Frontend
- Sign-up, Sign-in, Logout for Users 
- Cryptocurrencies List Landing Page and Cryptocurrency Details Page w/ Associated Posts
- Users can Create, Read, Update, and Delete Posts on a Cryptocurrency Detail Page
- Styled with CSS/Flexbox
- Deployed
- Proper Linting

### Challenges

- Backend Model Relationships
- Backend Controllers

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JavaScript library for building user interfaces |
|   React Router  | Standard library for routing in React |
| Axios | Promise-based HTTP Client for node.js and the browser |
|     Ruby on Rails    | Server-side web application framework written in Ruby  |
|     CORS    | An HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources  |
|     Bcrypt    | Password-hashing function   |
|     JWT    | A proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims  |

<br>

### Client (Front End)

#### Wireframes


[Mobile/Tablet- All Screens](https://user-images.githubusercontent.com/85003025/130716759-f8e7e2d5-f1f5-427e-9298-f0060b664db9.png)

[Desktop- Landing Page](https://wireframe.cc/dn1QRj)


#### Component Tree


[Component Tree](https://whimsical.com/component-tree-YE5zGEApwmTD9BHYUqcSr5)

#### Component Architecture


``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Cryptocurrencies.jsx
      |__ CryptocurrencyDetail.jsx
      |__ Posts.jsx
      |__ PostCreate.jsx
      |__ PostEdit.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ cryptocurrencies.js
      |__ posts.js



```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs    |
| Back End Database          |    H     |      1hrs      |     1hrs      |     1hrs    |
| Back End Models         |    H     |      1hrs      |     1hrs      |         |
| Back End Controllers          |    H     |      3hrs      |     1hrs     |         |
| Back End Routes         |    H     |      1hrs      |    1hrs     |         |
| Back End Authentication/Authorization         |    H     |      1hrs      |     1hrs     |   1hrs    |
| Front End Components          |    H     |      3hrs      |      1hrs     |         |
| Front End Screens          |    H     |      3hrs      |     1hrs      |         |
| Front End Services        |    H     |      3hrs      |     1hrs     |        |
| Front End Containers          |    H     |      3hrs      |     1hrs      |         |
| Front End Authentication/Authorization         |    H     |      1hrs      |     1hrs      |    1hrs    |
| CSS styling         |    H     |      6hrs      |         |         |
| Media Queries        |    H     |      2hrs      |         |         |
| Debugging        |    H     |      6hrs      |    1hrs     |         |
| PMVP- Comments        |    M     |      3hrs      |         |         |
| PMVP- Price Data        |    M     |      3hrs      |         |         |
| PMVP- User Profile        |    L     |      3hrs      |         |         |
| PMVP- New Posts to Top        |    L     |      2hrs      |         |         |
| PMVP- Upvoting Posts        |    L     |      3hrs      |         |         |
| TOTAL               |          |      51hrs     |          |          |


<br>

### Server (Back End)

#### ERD Model


[ERD](https://user-images.githubusercontent.com/85003025/130709409-0a0b285a-a7fc-439c-88b6-26f824b8bf2a.png)

<br>

***

## Post-MVP

- Comments on Posts (CRUD)
- Real-Time Cryptocurrency Price Data from 3rd Party API on Landing Screen
- User Profile Page w/ User's Posts
- New Posts Go to Top of Page
- Upvoting System for Posts

***

## Code Showcase



## Code Issues & Resolutions


