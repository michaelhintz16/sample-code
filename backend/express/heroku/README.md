# Deploying to Heroku
## Prerequisites
1. You have created a [free Heroku account](https://signup.heroku.com/).
2. You have an express app published to a remote repository on GitHub. If not, you can clone [this one](https://github.com/sait-wbdv/hello-express).
3. There is a `package.json` file present in your project root directory.

## Instructions
1. In the Dashboard: New > Create new app
2. Create an `App name` and `Region` (United States is best for us).
    - Note that your App name needs to be unique across all of Heroku so you might need to get creative.
    
3. In the Dashboard: Under Deploy > Deployment method, select Github and sign in with your preferred GH account.
4. Once you're signed in, select the GH repo that contains the app you'd like to deploy.
5. Manually deploy branch: select the branch and click Deploy Branch. Note: there is a limit to how many times you can deploy your app per minute.
6. When Heroku is done doing its business, click View App and hopefully you don't receive an error.