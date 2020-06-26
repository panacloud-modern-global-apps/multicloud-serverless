We are going to build and Deploy Hello World server with Express on Google Cloud Run

We will follow this tutorial to setup
1. [Build and Deploy on Google Cloud](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#node.js)


Steps to be followed (All below steps provided in above link):
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or Select existing project from Google Cloud Console
3. [Enabled Billing](https://cloud.google.com/billing/docs/how-to/modify-project) in Project created in step 2, Google cloud project required to enable billing. Google provide $300 credit for free trail for 12 months
4. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs)
5. After installation run 'Google Cloud SDK Shell', it will ask for login and then it will ask for project id on which you want to work on. This project was created in step 2
6. Create basic Node.js server application
7. Create file name 'Dockerfile' in root of project. Check source code of repo
8. Create file named '.dockerignore'. Check source code of repo
9. Check your project id with following command
```
gcloud config get-value project
``` 
10. Build Container Image for your project with following command
```
gcloud builds submit --tag gcr.io/PROJECT-ID/SERVICE-NAME
```
Example
```
gcloud builds submit --tag gcr.io/firstproject/helloworld
```
11. Deploy to Cloud Run with following command
```
gcloud run deploy SERVICE-NAME --image gcr.io/PROJECT-ID/SERVICE-NAME --platform managed --region us-central1 --allow-unauthenticated
```
Example
```
gcloud run deploy helloworld --image gcr.io/firstproject/helloworld --platform managed --region us-central1 --allow-unauthenticated
```


