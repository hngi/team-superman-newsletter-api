<!-- @format -->

# TEAM-SUPERMAN

## A dockerized micro-service for subscribing for and sending newsletters

## Pre-Requisites

- MongoDB and database created
- Copy and paste your mongodb connection string in the .\NewsCompositionService\src\config\config.js file

## How to Install and run the application

- Run "npm install"
- Run "npm start"
- This service is served on http://localhost:8000

## Available enpoints are:

get('/news') -> to get all available news
post('/email') -> to create news for an email, the request must have a body of: name, email
