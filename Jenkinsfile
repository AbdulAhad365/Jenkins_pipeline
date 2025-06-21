pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Clone code') {
            steps {
                git 'https://github.com/AbdulAhad365/Jenkins_pipeline.git'
            }
        }

        stage('Install dependency') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React app') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying...'
                // Example: xcopy build folder to some server path
                // bat 'xcopy /s /e /y build\\* C:\\path\\to\\deploy'
            }
        }
    }
}
