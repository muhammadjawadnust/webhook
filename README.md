Please do the following first before proceeding to start project

1. Create account in Mandril (If do not have already )

2. setup the DNS records against the email. I used info@10sprint.com for testing as I own this domain ;) it will take almost an hour to verify the DNS and A record.

3. Once done with step 2, install ngrok and run the below command
   --> ngrok http http://localhost:5001
   Note:
   ngrok is being used to get temporary public url to test. Please use your server end point in prod.

4. Retrive the "Forwading" endpoint/URL that will look like this . http://92832de0.ngrok.io
   add /webhook at the end of url

   keep in mind we are going to use POST request. Webhooks are POST requests

5. Once you have the URL, go to Mandril dashboard->Settings-webhook add the URL from step-4.
   (Please keep in mind url generated with ngrok do not presist if you restart or kill ngrok and open again).

6. .env file is porvided seprately.

---

--> RUN "npm i" and then follow the steps

=> 1st Step:

-->Run the following command in the projects root directory

=> In linux you may need to append sudo with the command

--> docker-compose up

=> this command will run the docker and will set up the mysql db

---

=> 2nd Step

--> knex migrate:latest --knexfile db/knexfile.js

=> Above command will run the migrations and will Add a Table in to the Db initially, So that when webhook is triggered, it should store the Mandrill events.

---

=>3rd Step

--> Run below two commands one after another

--> npm i
--> npm start

=> Above commands will first install all the node modules andt the run the express server and open the webhook endpoint to get hit.

---

=> 4th step

=> Open the below url in browser

--> localhost:5001/live

---

=> Approaches

--> docker-compose-temp.yml file was created initially to use postgress as a database, but due to postgress npm package and knex package having issues in their modules, I have to move to sql.

--> docker-compose.yml is the file for spining up the mysql datbase in the docker container.

--> Socket library is used to setup the real-time communication with the database.
<<<<<<< HEAD

--> Service folder have our services

--> connection folder have our connections

--> Email.js is the file that we can use to send and email, but you have to use your API key for mandril account.

---

=======
--> Service folder have our services
--> connection folder have our connections
--> Email.js is the file that we can use to send and email, but you have to use your API key for mandril account.
--
>>>>>>> 25eaaae718c4d1382ab7d0278ed0a99d4a74886d
--> The events are real time, and in console of browser you can see events too. But again these consoles should not
be pushed into PROD.

1.  Only message type is pushed to Front End. For sure we can emit alot of events.

-------Get in touch if you want me to add/upgrade any feature-----------
