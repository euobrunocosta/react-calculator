pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14') {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}