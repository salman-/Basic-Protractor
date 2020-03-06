"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    fillOperands(firstValue, secondValue) {
        this.firstOperand.sendKeys(firstValue);
        this.secodOperand.sendKeys(secondValue);
        protractor_1.browser.driver.sleep(10000);
    }
    selectOperator(operation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (operation === '+')
                yield this.operator.sendKeys('+');
            if (operation === '-')
                yield this.operator.sendKeys('-');
            if (operation === '*')
                yield this.operator.sendKeys('*');
            if (operation === '/')
                yield this.operator.sendKeys('+');
            console.log('operator is: ' + operation);
        });
    }
    clickOnGoButton() {
        this.goButton.click();
    }
    loadPage() {
        protractor_1.browser.get(this.url);
        protractor_1.browser.waitForAngular();
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvQ2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4RjtBQUU5RixNQUFhLFVBQVU7SUFTdkI7UUFGSSxRQUFHLEdBQVcsMERBQTBELENBQUM7UUFJekUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFTLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFHRCxZQUFZLENBQUMsVUFBaUIsRUFBRSxXQUFrQjtRQUU5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVLLGNBQWMsQ0FBQyxTQUFnQjs7WUFFakMsSUFBRyxTQUFTLEtBQUssR0FBRztnQkFDakIsTUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFHLFNBQVMsS0FBSyxHQUFHO2dCQUNqQixNQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUcsU0FBUyxLQUFLLEdBQUc7Z0JBQ2pCLE1BQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBRyxTQUFTLEtBQUssR0FBRztnQkFDakIsTUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQyxDQUFDO0tBQUE7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUEsUUFBUTtRQUNMLG9CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTdCLENBQUM7Q0FHQTtBQXBERCxnQ0FvREMifQ==