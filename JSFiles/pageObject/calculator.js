"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Calculator = (function () {
    function Calculator() {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        this.firstOperand = protractor_1.element(protractor_1.by.model('first'));
        this.secodOperand = protractor_1.element(protractor_1.by.model('second'));
        this.operator = protractor_1.element(protractor_1.by.model('operator'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.className('ng-binding'));
    }
    Calculator.prototype.fillOperands = function (firstValue, secondValue) {
        this.firstOperand.sendKeys(firstValue);
        this.secodOperand.sendKeys(secondValue);
    };
    Calculator.prototype.selectOperator = function (operator) {
        if (operator === '+')
            console.log('Plus');
        if (operator === '-')
            console.log('Minus');
        if (operator === '+')
            console.log('Multiply');
        if (operator === '+')
            console.log('Devision');
    };
    Calculator.prototype.clickOnGoButton = function () {
        this.goButton.click();
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvQ2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUE4RjtBQUU5RjtJQVFBO1FBRUksb0JBQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQVMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELGlDQUFZLEdBQVosVUFBYSxVQUFpQixFQUFFLFdBQWtCO1FBRTlDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxtQ0FBYyxHQUFkLFVBQWUsUUFBZTtRQUUxQixJQUFHLFFBQVEsS0FBSyxHQUFHO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBRyxRQUFRLEtBQUssR0FBRztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLElBQUcsUUFBUSxLQUFLLEdBQUc7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixJQUFHLFFBQVEsS0FBSyxHQUFHO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksZ0NBQVUifQ==