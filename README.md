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

**DeCryptor** is an online community where crypto traders and enthusiasts can engage in a discussion and share their thoughts on the the most popular cryptocurriencies.


<br>

## MVP

The **DeCryptor** MVP is a fullstack web application where users can sign-up/login, view the list top cryptocurrencies, and create/edit/delete posts on the details page of a specific cryptocurrency.

<br>

### Goals

- Ruby on Rails Backend
- React Frontend
- Sign-up, Sign-in, Logout for Users 
- List Cryptocurrencies and Details Page
- Users can Create, Read, Update, and Delete Posts on a Cryptocurrency Detail Page


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JavaScript library for building user interfaces |
|   React Router  | Standard library for routing in React |
| Axios | Promise-based HTTP Client for node.js and the browser |
|     Ruby on Rails    | Server-side web application framework written in Ruby  |

<br>

### Client (Front End)

#### Wireframes


[Mobile](https://wireframe.cc/3FVOTt)


[Tablet](url)


[Desktop](url)


#### Component Tree


[Component Tree](https://whimsical.com/component-tree-YE5zGEApwmTD9BHYUqcSr5)

#### Component Architecture


``` structure

src
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Cryptocurrencies.jsx
      |__ CryptocurrencyDetail.jsx
      |__ Posts.jsx
      |__ PostCreate.jsx
      |__ PostEdit.jsx
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ cryptocurrencies.js
      |__ posts.js
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx


```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal and Approval          |    H     |      3hrs      |           |        |
| Back End Database          |    H     |      3hrs      |           |         |
| Back End Models         |    H     |      3hrs      |           |         |
| Back End Controllers          |    H     |      3hrs      |          |         |
| Back End Routes         |    H     |      3hrs      |         |         |
| Back End Authentication/Authorization         |    H     |      3hrs      |          |       |
| Front End Components          |    H     |      3hrs      |           |         |
| Front End Screens          |    H     |      3hrs      |           |         |
| Front End Services        |    H     |      3hrs      |          |        |
| Front End Containers          |    H     |      3hrs      |           |         |
| Front End Authentication/Authorization         |    H     |      3hrs      |           |        |
| CSS styling         |    H     |      6hrs      |         |         |
| Media Queries        |    H     |      2hrs      |         |         |
| Debugging        |    H     |      6hrs      |         |         |
| TOTAL               |          |      47hrs     |          |          |


<br>

### Server (Back End)

#### ERD Model


[ERD](https://user-images.githubusercontent.com/85003025/130709409-0a0b285a-a7fc-439c-88b6-26f824b8bf2a.png)

<br>

***

## Post-MVP

- Comments on Posts (CRUD)
- Real-Time Cryptocurrency Price Data from 3rd Party API on Landing Screen
- New Posts Go to Top of Page
- Upvoting System for Posts

***

## Code Showcase



## Code Issues & Resolutions


