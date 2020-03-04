import { Calculator } from "./pageObject/calculator";
import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';
 


console.log("Hello World");



//let calc = new Calculator();

browser.get('https://stackoverflow.com/questions/3586775/what-is-the-correct-way-to-check-for-string-equality-in-javascript');
browser.sleep(5000);