import {  BeforeAll, Status, After } from 'cucumber';
import {browser} from 'protractor';

BeforeAll( async () => {
    await browser.manage().window().maximize();
  });

After(async function(scenario) {

    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
        const screenshot= await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
} )   
  
  