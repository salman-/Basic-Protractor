"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObject/calculator");
let calc = new calculator_1.Calculator();
cucumber_1.Given('I am in calculator website', async () => {
    await calc.loadPage();
});
cucumber_1.Given('I choose the operator as {string}', async (operator) => {
    await calc.selectOperator(operator);
});
cucumber_1.Given('I choose the operands as {string} and {string}', async (operand1, operand2) => {
    await calc.fillOperands(operand1, operand2);
});
cucumber_1.When('I click on Go', async () => {
    await calc.clickOnGoButton();
});
cucumber_1.Then('I get the result as {string}', async (expectedResult) => {
    await calc.getResult(expectedResult);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVDQUF3QztBQUN4Qyx5REFBc0Q7QUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFHMUIsZ0JBQUssQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLElBQUcsRUFBRTtJQUUxQyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ3pELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsZ0RBQWdELEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUVsRixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM3QixNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUU7SUFDNUQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDIn0=