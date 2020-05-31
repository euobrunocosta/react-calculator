pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                sh "sudo docker-compose build"
                sh "sudo docker-compose up -d"
            }
        }
    }
}