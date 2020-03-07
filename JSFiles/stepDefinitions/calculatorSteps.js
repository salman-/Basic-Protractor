"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObject/calculator");
let calc = new calculator_1.Calculator();
cucumber_1.Given('I am in calculator website', async () => {
    await calc.loadPage();
});
cucumber_1.Given('I choose the operator as {string}', async (string) => {
    await calc.selectOperator("/");
});
cucumber_1.Given('I choose the operands as {string} and {string}', async (string, string2) => {
    await calc.fillOperands('3', '6');
});
cucumber_1.When('I click on Go', async () => {
    await calc.clickOnGoButton();
});
cucumber_1.Then('I get the result as {string}', async (string) => {
    await calc.getResult();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVDQUF3QztBQUN4Qyx5REFBc0Q7QUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFHMUIsZ0JBQUssQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLElBQUcsRUFBRTtJQUUxQyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMsQ0FBQztBQUlILGdCQUFLLENBQUMsZ0RBQWdELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUUvRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXJDLENBQUMsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM3QixNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUMifQ==