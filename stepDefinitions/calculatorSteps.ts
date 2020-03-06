import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';
import{Given,When,Then} from 'cucumber';
import { Calculator } from "../pageObject/calculator";
let calc;

  Given('I am in calculator website', function () {
   // calc = new Calculator();
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
  });



  Given('I choose the operator as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Given('I choose the operands as {string} and {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
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
