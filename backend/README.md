<h1 align="center">
	<img alt="Logo" src="https://user-images.githubusercontent.com/64690421/88062666-83a18400-cb3f-11ea-9103-b6844af27c06.png" width="200px" />
</h1>

<h3 align="center">
  CRUD Users
</h3>

<p align="center">Creating, Reading, Updating and deleting Users</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jhonpedro/crud-users">

  <a href="https://github.com/jhonpedro">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-joao%20pedro-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jhonpedro/crud-users">
  
  <a href="https://github.com/jhonpedro/crud-users/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jhonpedro/crud-users">
  </a>
  
  <a href="https://github.com/jhonpedro/crud-users/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jhonpedro/crud-users">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">An example for a aplication that requires an CRUD for users, <strong>this aplication is only for learning, and it's not suitable for production</strong></p>

To see the **web client**, click here: [PROJECT_NAME Web](https://github/jhonpedro/crud-users/backend/readme.md)</br>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [JWT-token](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [dotenv](https://github.com/motdotla/dotenv)
- [cors](https://github.com/expressjs/cors)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- [pm2](https://github.com/Unitech/pm2)

## 💻 Getting started

See below how you can start using the project

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/jhonpedro/crud-users && cd crud-users
```

**Follow the steps below**

```bash
# Install the dependencies
$ npm i

# Make sure the keys in '.env' to connect with your database
# are set up correctly.

# To finish, run the api service
# Install if you dont have the pm2 lib globaly to have the enviroment variable in start script
$ npm start

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ git repo fork jhonpedro/crud-users
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd https://github.com/jhonpedro/crud-users

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch
---

> I'm using this template [here](https://github.com/EliasGcf/readme-template/tree/master/templates)
