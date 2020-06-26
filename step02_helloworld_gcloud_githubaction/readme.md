We are going to build and Deploy Hello World server with Express on Google Cloud Run

We will follow this tutorial to setup
1. [Github Actions — How to ship code to GCP Cloud Run](https://itnext.io/github-actions-ship-code-to-gcp-cloud-run-8d607f34e1cd)


Steps to be followed :
1. Review code and files from step 'step01_helloworld_gcloud_manual'. Code and files will be same
2. Step 1 to Step 8 of 'step01_helloworld_gcloud_manual' will be same
3. Use this [YAML file](https://github.com/GoogleCloudPlatform/github-actions/blob/master/example-workflows/cloud-run/.github/workflows/cloud-run.yml) for Github Action
4. [Create a service account](https://console.cloud.google.com/iam-admin/serviceaccounts) follow the steps in tutorial above
5. [Convert JSON object of service account credential into base64](https://codebeautify.org/json-to-base64-converter), this base64 will be added in github secrets
6. Service account Needs following 5 Roles
   - Cloud Build Editor
   - Service Account User
   - Cloud Run Admin
   - Storage Object Admin (Tutorial does not mention it)
   - Viewer
7. Add Secrets in Github, 3 secrets needs to be added
   - RUN_PROJECT
     - This is project id which you created on google cloud
   - SA_EMAIL
     - This is email id of service account
   - RUN_SA_KEY
     - This is google service account credentials in base64 format which we created in step 5
8. Commit code and each time code will be deployed directly

