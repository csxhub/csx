pipeline {
    agent any

    stages {
        stage('Docker-Compose') {
            steps {
                echo 'run Doccker-Compose'
                sh 'docker-compose version'
                sh 'docker-compose down'
                sh 'docker-compose up --build'

            }
        }
    }
}
