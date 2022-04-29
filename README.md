# Pillole di Energia website

The app allows the user to promote their energy consultant business and their YouTube channel. The user can blog, update the charts and collect the email addresses of prospects through the energy and tax check-up functionalities.

  - [The Challenge](#the-challenge)
  - [Setup](#setup)
  - [What I learned](#what-i-learned)
    - [Gridsome (Static Site Generator)](#gridsome-static-site-generator)
    - [Serverless Functions](#serverless-functions)
    - [Responsive email framework](#responsive-email-framework)
    - [D3 and Vue integration](#d3-and-vue-integration)
  - [Links](#links)
  - [Built with](#built-with)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Continuos Deployment](#continuos-deployment)
  - [References](#references)


## The Challenge
The website should have:

- a blog
- charts (line plot and barplot)
- interactive energy check-up and tax check-up
- the ability to send an automatic email to visitors completing the energy check-up
- the ability to store email addresses in a database

Working in team with an Art Director

## Setup

```bash
# Clone the following repository - frontend
$ git clone https://github.com/StefanoFrontini/pilloledienergia.git

# Go into the repository
$ cd pilloledienergia

# Install Gridsome CLI
$ npm install --global @gridsome/cli

# Install dependencies
$ npm install

# Run the frontend
$ gridsome develop
```
## What I learned
### Gridsome (Static Site Generator)

Gridsome is a static site generator for Vue.js.

A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time. Because these HTML pages are pre-built, they can load very quickly in users' browsers.

Gridsome adds a GraphQL layer that helps you bring data from API's, CMS's with ease at build time.
### Serverless Functions
Serverless functions let you run server-side code without having to run a dedicated server.

Netlify let you code your functions in Javascript. An example of a function called hello.js would be:

```Javascript
exports.handler = async function(event, context) {
    return {
        statusCode:200,
        body: JSON.stringify ({message: "Hello World"})
    }
}
```
That's it! Your little server is ready!

In this project I used Netlify Serverless Functions to send a notification email with nodemailer and to update the database with a graphQL query (FaunaDB).
### Responsive email framework
Responsive email is hard. Each client renders HTML in its own way and some don’t even support HTML, which can cause delivery issues.

I used the MJML framework to send the email to the visitor who completes the energy check-up
### D3 and Vue integration
D3 and Vue both want to handle the DOM.

I decided to let Vue handle the DOM and use the powerful D3 primitives.
## Links

 [Live site](https://www.pilloledienergia.com/)

## Built with
### Frontend
- HTML
- CSS Flexbox
- SASS
- Javascript
- Vue
- Gridsome (Static Site Generator)
- D3
- GraphQL
- Markdown
- MJML responsive email framework
### Backend
- FaunaDB
- Netlify Serverless Functions

## Continuos Deployment
I deployed the frontend to Netlify.

When I push a new commit on Github, Netlify triggers a new build.

## References

 [D3 and Vue workshop](https://www.youtube.com/watch?v=CkFktv0p3pw&t=4360s)
 [Responsive email framework](https://mjml.io/)
