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


async fillOperands(firstValue:string, secondValue:string){

    await this.firstOperand.sendKeys(firstValue).then(()=>{
        console.log("First operand: "+firstValue);
    });
    await this.secodOperand.sendKeys(secondValue).then(()=>{
        console.log("Second operand: "+secondValue);
    });;
}

async selectOperator(operation:string){

       await  this.operator.sendKeys(operation).then(()=>{
        console.log('operator is: '+operation);
       });

}

async clickOnGoButton(){
    await this.goButton.click();
}

async loadPage(){
    await browser.get(this.url).then(()=>{
        console.log("Page is loaded: "+this.url);
    });
 
    await browser.waitForAngular();
}

async getResult(){
    await this.result.getText().then((result)=>{
        console.log("Result is: "+result); 
    })
}

}