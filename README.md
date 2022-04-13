Please do the following first before proceeding to start project

1. Create account in Mandril (If do not have already )

2. setup the DNS records against the email. I used info@10sprint.com for testing as I own this domain ;) it will take almost an hour to verify the DNS and A record.

3. Once done with step 2, install ngrok and run the below command
   --> ngrok http https://localhost:5001

4. Retrive the "Forwading" endpoint/URL that will look like this . http://92832de0.ngrok.io

5. Once you have the URL, go to Mandril dashboard->Settings-webhook add the URL from step-4.
   (Please keep in mind url generated with ngrok do not presist if you restart or kill ngrok and open again).

---

# 1st Step:

# Run the following command in the projects root directory

# In linux you may need to append sudo with the command

--> docker-compose up

# this command will run the docker and will set up the mysql db

---

# 2nd Step

--> knex migrate:latest --knexfile db/knexfile.js

# Above command will run the migrations and will Add a Table in to the Db initially, So that when webhook is triggered, it should store the Mandrill events.

# -----------------------------

# 3rd Step

# Run below two commands one after another

--> npm i
--> npm start

# Above commands will first install all the node modules andt the run the express server and open the webhook endpoint to get hit.

# -----------------------

# 4th step

# Open the below url in browser

--> localhost:5001

# --------------------------

# Approaches

--> docker-compose-temp.yml file was created initially to use postgress as a database, but due to postgress npm package and knex package having issues in their modules, I have to move to sql.

--> docker-compose.yml is the file for spining up the mysql datbase in the docker container.

--> Socket library is used to setup the real-time communication with the database.
--> Flask can also be used to create this porject
