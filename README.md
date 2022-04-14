This repository contains an web example application showing recipes and allowing users to rate and favorite them. It is built with frontend in React.js that is serverd by Express.js backend which also server API and connects to a database.

List of contents:
- [How to set up](#user-content-how-to-set-up)
  - [Database](#user-content-database)
  - [Project](#user-content-project)
- [How to run](#user-content-how-to-run)
- [What would I change if I was planning to make a real production app](#user-content-what-would-i-change-if-i-was-planning-to-make-a-real-production-app)

### How to set up
#### Database
To store information about users, recipes, ratings, favorites the application is using a database, without the connection no content will
be displayed (only application skeleton).

I have used [KnexJS](http://knexjs.org/) for managing the connection. The setup for the connection is stored in the file `knexfile.js`
and it should be updated with appropriate settings. I have used Postgres, other relational databases such as MySQL, MariaDB, etc are
available but only postgres connector is currently added to node_modules. [More on knex setup](http://knexjs.org/#Installation)
```javascript
/knexfile.js
...
const databaseConfig = {
  client: 'postgresql',
  connection: {
    database: 'hellofresh_jakub',
    user:     'test',
    password: 'test'
  },
...
```
To create a database and grant permissions to a user in `psql`, you can run
```mysql
CREATE DATABASE hellofresh_jakub;
CREATE ROLE test WITH LOGIN PASSWORD 'test';
GRANT ALL PRIVILEGES ON DATABASE hellofresh_jakub to test;
```

#### Project
*Requirements*: node (I have used 10.15.3)
```
yarn install
yarn db:setup     # this will run all the migrations and seed files
```

### How to run
#### App
To run app in development mode you only need `yarn start`. This will start express server that hosts the frontend as well.
The application will start on default port `4000` this can be changed with env variable `PORT`.

To run production build you need to run `yarn build` and `yarn start:prod`. It will use port `4000` as well.
#### Tests
To run the test use `yarn test`.
I have added 2 tests suites with `Jest` to check Rating and Favorite components.

### How to use
* Upon visiting the homepage you can click Login [localhost:4000](http://localhost:4000)
* The login form has validates email and password. Then authorizes the user.
  * In seed file there are to users, they can be used to log in when testing the app.
    * One of them is: `test@hellofresh.com / test`
* Logged in user can favorite and rate recipes. Average rating will be calculated from all ratings.

![First screen](/screenshots/overview_not_logged_in.png)

![Login screen](/screenshots/login.png)

![Logged screen](/screenshots/overview_logged_in.png)

![Rating](/screenshots/rating.png)

![Favorite](/screenshots/favorite.png)

![Mobile](/screenshots/mobile.png)

![Tablet](/screenshots/tablet.png)

### What would I change if I was planning to make a real production app
* Average rating is right now calcualted every time rating is made, it's an unnecessary load on the database. It could be done in a cron job that runs once a day.
* I have created a simple authentican / authorization system which uses application memory storage for sessions thus it drops the sessions when it stops. It would be better to use database for session storage and a proper authentication library like PassportJS. Same goes for passwords, currently they are stored in plain text in database.
* I would add a notification system to inform users when they are failing to favorite or rate a recipe due to session or backend problems.
* I would also add a docker setup to allow easy deployment to a server.
