# Basic-Protractor

This is a very basic protractor test for [Calculator page](http://www.way2automation.com/angularjs-protractor/calc/). The test generates a HTML report in the `report` folder. In case the test fails, an screenshot of the view is added to the report.

---
#### How to run?
1. `npm install`
2. `npm run webdriver-update`
3. `npm run test`
---
#### Technologies

Technology  | Stack
------------- | -------------
Build Tool  | node
Language  | Typescript
UI technology  | Protractor / Cucumber 
Test framework  | Chai
Reporting | [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter)
IDE | Visual Studio Code

---
#### How do the Hooks work?

```{Typescript}
import {  BeforeAll, Status, After } from 'cucumber';
import {browser} from 'protractor';

BeforeAll( async () => {
    await browser.manage().window().maximize();
  });

After(async function(scenario) {                  // If the scenario fails then take a screenshot 

    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
        const screenshot= await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
} ) 

```
