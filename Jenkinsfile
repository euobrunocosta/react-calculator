pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                nodejs(nodeJSInstalationName: nodejs) {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}