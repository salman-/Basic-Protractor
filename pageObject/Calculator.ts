import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';

export class Calculator{

    firstOperand: ElementFinder;
    secodOperand: ElementFinder;
    operator:     ElementFinder;
    goButton:     ElementFinder;
    result:       ElementFinder;
    url =         'http://www.way2automation.com/angularjs-protractor/calc/';

constructor(){

    this.firstOperand = element(by.model('first'));
    this.secodOperand = element(by.model('second'));
    this.operator     = element(by.model('operator'));
    this.goButton     = element(by.id('gobutton'));
    this.result       = element(by.className('ng-binding'));
}


fillOperands(firstValue:string, secondValue:string){

    this.firstOperand.sendKeys(firstValue);
    this.secodOperand.sendKeys(secondValue);
    browser.driver.sleep(10000);
}

async selectOperator(operation:string){

    if(operation === '+' )
       await  this.operator.sendKeys('+');
    if(operation === '-' )
       await  this.operator.sendKeys('-');
    if(operation === '*' )
       await   this.operator.sendKeys('*');
    if(operation === '/' )
       await  this.operator.sendKeys('+');

    console.log('operator is: '+operation);
    //browser.sleep(10000);
}

clickOnGoButton(){
    this.goButton.click();
}

 loadPage(){
    browser.get(this.url);
    browser.waitForAngular();

}


}