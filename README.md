# hackaton-applitools

The project uses WebdriverIO and Applitools eyes.
  
To run the test do following:
1. clone the repo with the command:  

       git clone https://github.com/mareru/hackaton-applitools.git
2. install packages with the command:

        npm install
3. for the applitools test suite to run you need to set environment variable APPLITOOLS_API_KEY_HACKATHON:

        Mac: export APPLITOOLS_API_KEY_HACKATHON='YOUR_API_KEY'
        Windows: set APPLITOOLS_API_KEY_HACKATHON='YOUR_API_KEY'
   You can get the key by creating the account on the https://applitools.com/users/register .  
   There you can find the key value.  
   
   ![API_KEY](src/resources/images/API_KEY_1.png)
4. In order to run traditional test suite for version 1 of the app use command:
        
        npm run traditionalversion1
   In order to run traditional test suite for version 2 of the app use the command:
   
        npm run traditionalversion2
   In order to run applitools test suite for version 1 of the app use the command:
    
        npm run applitoolsversion1
   In order to run applitools test suite for version 2 of the app use the command:
   
        npm run applitoolsversion2
5. if you want to run only the specific feature file, then open wdio.conf.js file and comment everything in the specs section except that feature file. 
For example, to run tests for the second task (Data-Driven Test):  
    1. open wdio.conf.js
    2. uncomment feature file for that task (for traditional and applitools version) and comment everything else in specs section:
     
            specs: [
            // './src/features/**/*.feature',
    
            // './src/features/traditional/*.feature',
            // './src/features/traditional/loginPageUIElements.feature',
             './src/features/traditional/loginPageDataDriven.feature',
            // './src/features/traditional/tableSort.feature',
            // './src/features/traditional/canvasChart.feature',
            // './src/features/traditional/dynamicContent.feature',
    
            // './src/features/applitools/*.feature',
            // './src/features/applitools/loginPageUIElements.feature',
             './src/features/applitools/loginPageDataDriven.feature',
            // './src/features/applitools/tableSort.feature',
            // './src/features/applitools/canvasChart.feature',
            // './src/features/applitools/dynamicContent.feature'
            ],
        Each task has its own feature file in 2 flavors: traditional one and applitools one.
        This is the list:
        1. Login Page UI Elements Test:
        
                ./src/features/traditional/loginPageUIElements.feature
                ./src/features/applitools/loginPageUIElements.feature
        2. Data-Driven Test:
        
                ./src/features/traditional/loginPageDataDriven.feature
                /src/features/applitools/loginPageDataDriven.feature
        3. Table Sort Test:
        
                ./src/features/traditional/tableSort.feature
                ./src/features/applitools/tableSort.feature
        4. Canvas Chart Test:
        
                ./src/features/traditional/canvasChart.feature
                ./src/features/applitools/canvasChart.feature
        5. Dynamic Content Test:
                
                ./src/features/traditional/dynamicContent.feature
                ./src/features/applitools/dynamicContent.feature
