****************************************************************************************************
Pre-requisite
****************************************************************************************************
Please make sure node.js is installed in your machine and NODE_HOME is set in environment variables.
Also set the values for these variables in your environment variables
WEBDRIVER_URL
WEBDRIVER_WAIT
WEBDRIVER_BROWSER

Note: I have checked in "exapmle.env" file. Please copy the content into your ".env" file

****************************************************************************************************
Steps to follow
****************************************************************************************************
1. Once you pull the code from git repo, run npm install from root directory of the project.
2. To run api Tests run the following command - "npm run api_tests"
3. To run ui Tests run the following command - "npm run ui_tests"
4. To genereate report run the following command - "npm run generate_report"
5. To genereate report run the following command - "npm run open_report"

****************************************************************************************************
Tech Stack used
****************************************************************************************************
API Tests:
---------------
1. SuperTest
2. Mocha
3. Chai
4. Mochawesome Reporting

UI tests:
--------------
1. Webdriver.io
2. Allure Reporting
3. Mocha



