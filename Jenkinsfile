pipeline{
    agent any{
        stages{
            stage('clone code'){
                steps{
                    git 'https://github.com/AbdulAhad365/Jenkins_pipeline.git'
                }

            }
            stage('Install dependency'){
                steps{
                    bat 'npm install'
                }
            }
            stage('build react app'){
                steps{
                    bat 'npm run build'
                }
            
            }
            stage('deploy'){
                steps{
                    bat 'echo Deploying...'
                }
            }
        }
    }
}