"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var calculator_1 = require("../pageObject/calculator");
var calc;
cucumber_1.Given('I am in calculator website', function () {
    calc = new calculator_1.Calculator();
});
cucumber_1.Given('I choose the operator as {string}', function (string) {
    return 'pending';
});
cucumber_1.Given('I choose the operands as {string} and {string}', function (string, string2) {
    return 'pending';
});
cucumber_1.When('I click on Go', function () {
    return 'pending';
});
cucumber_1.Then('I get the result as {string}', function (string) {
    return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF3QztBQUN4Qyx1REFBc0Q7QUFDdEQsSUFBSSxJQUFJLENBQUM7QUFFUCxnQkFBSyxDQUFDLDRCQUE0QixFQUFFO0lBQ2xDLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUlILGdCQUFLLENBQUMsbUNBQW1DLEVBQUUsVUFBVSxNQUFNO0lBRXpELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBSUgsZ0JBQUssQ0FBQyxnREFBZ0QsRUFBRSxVQUFVLE1BQU0sRUFBRSxPQUFPO0lBRS9FLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLGVBQWUsRUFBRTtJQUVwQixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxVQUFVLE1BQU07SUFFbkQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==