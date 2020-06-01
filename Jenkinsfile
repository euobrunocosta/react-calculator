pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs14') {
                    sh 'npm install'
                    sh 'npm start'
                }
            }
        }
    }
}