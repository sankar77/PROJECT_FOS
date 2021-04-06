# Project::Movies Application

**Course Name:** CSCI 5828 - Foundations of Software Engineering

**Team Name:** `.net_flix`

**Team Members:**
 - Abhinivesh Palusa
 - Sankar Nagarajan
 - Mohan Dwarampudi
 - Tiffany Phan
 - Neel Katuri

 **Project Overview:** [Click here for our Wiki page](https://github.com/sankar77/PROJECT_FOS/wiki/Project-Overview)

 **Project Planning:** [Click here for our stories on pivotal tracker](https://www.pivotaltracker.com/n/projects/2491387)

 **Deployed Movies Application Link:** [Click here to view the URL of our deployed app](https://main.d8jk9hp5txm1j.amplifyapp.com/)
 
 **Iteration Burndown:** [Click here to view our Iteration Burndown](https://github.com/sankar77/PROJECT_FOS/wiki/Iteration-Burndown-Chart)
 
 **Iteration Planning:** [Click here to view our Iteration Planning](https://github.com/sankar77/PROJECT_FOS/wiki/Iteration-Planning)
 
 **Testing:** [Click here to learn more on our testing](https://github.com/sankar77/PROJECT_FOS/wiki/Testing)

 **Features Completed So Far:**
  - Alert the movie/TV show name once the search space is filled and search button clicked.
  - Deployed the frontend system setup using AWS Amplify.
  - Deployed the backend system setup on Heroku.
  - CI workflow using Github-Actions separately for frontend and backend.
  - Manage Homepage according to latest playing movies/tv-shows for a non-registerd user.
  - Manage Logging in for a registered user.
  - Displaying Movie Cards or TV-Show Cards for a non-registered user.
  - Manage Registration for a non-register user and storing the information using cloud-firestore.
  - Creating our custom API endpoints on our backend server. The endpoints are as follows:
    - `/movies/:id`
    - `/tvshows/:id`
    - `/genres/:genreName`
    - `/nowplaying`
    - `/movieList/:movieName`
  - Written 4 unit-tests without mock objects
  - Written 1 integration test without mock objects
  - Written 11 test-doubles using mock objects to fake API calls
  - Written 12 acceptance tests
  - Data Analyzer - analyzing sentiments of reviews displayed on Movie/TV-Show cards.
  - Data Collector - Collecting data independently from our backend API endpoints, on TV-Shows for every 60 minutes and storing it in firestore.

  **Installation Instructions:**
  * Clone our repository
    *   `git clone https://github.com/sankar77/PROJECT_FOS.git`
  * Install Node
    *   [Follow this link to install on your respective platform](https://nodejs.org/en/download/)
  * Install All Frontend Dependencies
    *   `cd frontend && npm install`
  * Install All Backend Dependencies
    *   `cd ../backend && npm install`
  * Keep the Server(Backend) Running
    *   `node index.js`
  * Keep the UI Running (on a separate terminal)
    *   `cd ../frontend && npm start`


