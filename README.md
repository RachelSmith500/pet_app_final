
# Pet App

Pet app is a pet task organization solution. I have 3 pets at home, two cats and a dog. Attending Prime digital Academy is a huge time commitment. I'm spending most of my time coding, talking about coding, or thinking about coding. Proper time management and organization is the key to success and work life balance. I live in a household with one other person so I thought it would be a good idea to eliminate confusion around our daily pet routine. 

The app allows you to make and maintain a list of daily pet activities. When something on the list has been accomplished you can cross it off the list. If you think a daily pet activity is no longer relevant you can remove it from the list entirely. The app also allows a user to document their dog walks. They can comment on things like the weather, dog behavior, spotted wildlife, and length of dog walk. The user can also go back in history to look up prior dog walks. 

Every time I go for a walk I check the temperature. A user can check the temperature by using this app as well. I leveraged a weather api to pull in the current temp in Minneapolis. 

Please note that while learning APIs I mistakenly pushed up my API key to GitHub. I didn't want to have my API key on my repo so I deleted my original repo and pushed up a copy. This means that I lost most of the commit history on this project.  


# Technologies

This app uses React, Redux, Express, Passport, PostgreSQL, CSS, and Rapid Weather API. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

Please also look at the database sql file to make additional required tables to spin up this app.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

### Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Thank you too, to my peers! You all are amazing! 
