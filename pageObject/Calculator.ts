import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';

export class Calculator{

    firstOperand: ElementFinder;
    secodOperand: ElementFinder;
    operator:     ElementFinder;
    goButton:     ElementFinder;
    result:       ElementFinder;

constructor(){

    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    this.firstOperand = element(by.model('first'));
    this.secodOperand = element(by.model('second'));
    this.operator     = element(by.model('operator'));
    this.goButton     = element(by.id('gobutton'));
    this.result       = element(by.className('ng-binding'));
}


fillOperands(firstValue:number, secondValue:number){

    this.firstOperand.sendKeys(firstValue);
    this.secodOperand.sendKeys(secondValue);
}

selectOperator(operator:string){

    if(operator === '+' )
       console.log('Plus');
    if(operator === '-' )
       console.log('Minus');
    if(operator === '+' )
       console.log('Multiply');
    if(operator === '+' )
       console.log('Devision');
}

clickOnGoButton(){
    this.goButton.click();
}

}