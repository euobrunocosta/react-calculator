pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: nodejs) {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}