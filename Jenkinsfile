pipeline{
    agent any

    stages{
        stage('Install Dependencies'){
            steps{
                bat 'npm install'
            }
        }

        stage('Lint'){
            steps{
                bat 'npm run lint'
            }
        }

        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}