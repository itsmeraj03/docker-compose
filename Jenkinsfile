pipeline {
    agent any

    environment {
        DOCKER_USER = "itsmeraj03"
        IMAGE_TAG   = "v1"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/itsmeraj03/docker-compose.git'
            }
        }

        stage('Build Docker Compose Images') {
            steps {
                sh 'docker-compose up --build -d'
            }
        }
       /* stage('Docker Compose Up'){
            steps{
                sh 'docker-compose up'
            }
        }*/
        stage('Wait 1 Minute'){
            steps{
                sh 'sleep 60'
            }
        }
        stage('Docker Compose Down'){
            steps{
                sh 'docker-compose down'
            }
        }
       /*stage('Container createion on local server'){
            steps{
                sh 'docker-compose up'
            }
        }*/

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh '''
                    echo "$PASSWORD" | docker login \
                    -u "$USERNAME" \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Tag Images') {
            steps {
                sh """
                docker tag proj-frontend ${DOCKER_USER}/frontend:${IMAGE_TAG}
                docker tag proj-backend ${DOCKER_USER}/backend:${IMAGE_TAG}
                """
            }
        }

        stage('Push Images') {
            steps {
                sh """
                docker push ${DOCKER_USER}/frontend:${IMAGE_TAG}
                docker push ${DOCKER_USER}/backend:${IMAGE_TAG}
                """
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
