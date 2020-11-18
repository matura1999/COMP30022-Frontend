# Mojito E-Portfolio Frontend

Mojito E-Portfolio is an online portfolio app, this is the front end client of the app

## Deployment
Deployment has already been set up on a Heroku server. This app is running on:

[https://mojito-portfolio.herokuapp.com](https://mojito-portfolio.herokuapp.com)

## Features

**1. User System:** Allow sign in and sign up of different users to create their own portfolio

**2. Personal Information:**  Users can add, delete and modify their personal information including the basic information, educational background and work experience

**3. Upload Content:** Users can upload files, media files with descriptions and essay with a thumbnail

**4. Manage Content:** Users can search and sort their uploaded content, and can delete any of those. They can also edit media descrition and their own essay.

**5. User Portfolio System:** All uploaded information, files, media and essays will be presented in their personal portfolio page, which can be visited by search on other users

## Local Installation

These intructions will help you get a copy of the project up and running for development and testing. The frontend of this project is built on React. You will need `npm` installed to start.

### Client: React

First start by installing the dependencies in the root directory
```
npm install
```

To start the server, there is two way to choose from  

1.Runs the app in the development mode by:
```
npm run-script dev
```
Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Produces a static React build by running:
```
npm run-script build
```
Then start the server by
```
npm start
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


## Testing
Unit Testing on some of the components are ready, use
```
npm test
```
to run the tests
