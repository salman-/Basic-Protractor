import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config:Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework:'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    directConnect:true,

    specs: ['../features/calculator.feature'],
    
    capabilities: {
        browserName:'chrome'
    },

    cucumberOpts: {
        // require step definitions
        format:'json:./reports/cucumberReport.json',
        
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },
      onComplete:()=>{

        var options = {
          theme: 'bootstrap',
          jsonFile: './reports/cucumberReport.json',
          output: './reports/cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);
      

      }

  };