import {browser} from 'protractor';

import{Given,When,Then} from 'cucumber';
import { Calculator } from "../pageObject/calculator";
import { async } from 'q';
let calc = new Calculator();


  Given('I am in calculator website', async ()=> {

      await calc.loadPage();
  });


  Given('I choose the operator as {string}', async (operator) => {
       await calc.selectOperator(operator);
  });

  Given('I choose the operands as {string} and {string}', async (operand1, operand2) => {
    
     await calc.fillOperands(operand1 ,operand2);
  });

  When('I click on Go', async () => {
      await calc.clickOnGoButton();
  });


  Then('I get the result as {string}', async (expectedResult) => {
    await calc.getResult(expectedResult);
  });
