# CI / CD Automation using Github, Jenkins & Docker
1. Developer pushes code to GitHub.
2. GitHub webhook triggers Jenkins. (But i don't create webhook bcz its n't create local server so i build set for timing every time)
3. Jenkins checks out the latest source code.
4. Docker images are built. (Am using docker compose bcz its multistage so its easy and quick finish to wrk)
5. Images are pushed to Docker Hub.(Am giving my credenitials like jenkins secrets section)
6. Docker Compose deploys the application.
7. Application becomes available for users.

# Pre-Requirements
-> Docker
-> Docker Compose
-> Jenkins
-> Git
-> GitHub Account
-> Docker Hub Account

# Code
1.=> Am get three tier architecture code like Frontend, Backend and Database
2.=> So am create Dockerfile in Frontend and Backend 
3.=> Then I Create Docker Compose file like Frontend and Backend and Database also include in one file.
4.=> I push to GitHub its automatically get and change the changes

# Jenkins Pipeline
The Jenkins Pipeline Perform:
  ==> Source code checkout
  ==> Docker image build
  ==> Docker image push to Docker Hub
  ==> Container Deployment
  ==> Extra I was set like time after that timeing finish its automatically down 


  
