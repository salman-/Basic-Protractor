"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.url = 'http://www.way2automation.com/angularjs-protractor/calc/';
        this.firstOperand = protractor_1.element(protractor_1.by.model('first'));
        this.secodOperand = protractor_1.element(protractor_1.by.model('second'));
        this.operator = protractor_1.element(protractor_1.by.model('operator'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.className('ng-binding'));
    }
    async fillOperands(firstValue, secondValue) {
        await this.firstOperand.sendKeys(firstValue).then(() => {
            console.log("First operand: " + firstValue);
        });
        await this.secodOperand.sendKeys(secondValue).then(() => {
            console.log("Second operand: " + secondValue);
        });
        ;
    }
    async selectOperator(operation) {
        await this.operator.sendKeys(operation).then(() => {
            console.log('operator is: ' + operation);
        });
    }
    async clickOnGoButton() {
        await this.goButton.click();
    }
    async loadPage() {
        await protractor_1.browser.get(this.url).then(() => {
            console.log("Page is loaded: " + this.url);
        });
        await protractor_1.browser.waitForAngular();
    }
    async getResult() {
        await this.result.getText().then((result) => {
            console.log("Result is: " + result);
        });
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvQ2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RjtBQUU5RixNQUFhLFVBQVU7SUFTdkI7UUFGSSxRQUFHLEdBQVcsMERBQTBELENBQUM7UUFJekUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFTLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFHRCxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQWlCLEVBQUUsV0FBa0I7UUFFcEQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7SUFDUixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFnQjtRQUU5QixNQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFVixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWU7UUFDakIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUTtRQUNWLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTO1FBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVBO0FBdkRELGdDQXVEQyJ9