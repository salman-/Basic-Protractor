import {browser} from 'protractor';

import{Given,When,Then} from 'cucumber';
import { Calculator } from "../pageObject/calculator";
import { async } from 'q';
let calc = new Calculator();


  Given('I am in calculator website',  async ()=> {

      await calc.loadPage();
      //browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
      // 

  });



  Given('I choose the operator as {string}', async (string) => {
      await calc.selectOperator("+");
     //return 'pending';
  });



  Given('I choose the operands as {string} and {string}', /*async*/ (string, string2) => {
    
    // await calc.fillOperands('3' ,'6');
    return 'pending';
  });



  When('I click on Go', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('I get the result as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
