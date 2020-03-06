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
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObject/calculator");
let calc = new calculator_1.Calculator();
cucumber_1.Given('I am in calculator website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.loadPage();
}));
cucumber_1.Given('I choose the operator as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.selectOperator("+");
}));
cucumber_1.Given('I choose the operands as {string} and {string}', (string, string2) => {
    return 'pending';
});
cucumber_1.When('I click on Go', function () {
    return 'pending';
});
cucumber_1.Then('I get the result as {string}', function (string) {
    return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLHVDQUF3QztBQUN4Qyx5REFBc0Q7QUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFHMUIsZ0JBQUssQ0FBQyw0QkFBNEIsRUFBRyxHQUFRLEVBQUU7SUFFM0MsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFJMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGdCQUFLLENBQUMsbUNBQW1DLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN4RCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGdCQUFLLENBQUMsZ0RBQWdELEVBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFHcEYsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsZUFBZSxFQUFFO0lBRXBCLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDhCQUE4QixFQUFFLFVBQVUsTUFBTTtJQUVuRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyJ9