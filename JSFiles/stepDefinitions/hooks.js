"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.BeforeAll(async () => {
    await protractor_1.browser.manage().window().maximize();
});
cucumber_1.After(async function (scenario) {
    console.log("Test is completed");
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        const screenshot = await protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUQ7QUFDckQsMkNBQW1DO0FBRW5DLG9CQUFTLENBQUUsS0FBSyxJQUFJLEVBQUU7SUFDbEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUwsZ0JBQUssQ0FBQyxLQUFLLFdBQVUsUUFBUTtJQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFDM0M7UUFDSSxNQUFNLFVBQVUsR0FBRSxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkM7QUFDTCxDQUFDLENBQUUsQ0FBQSJ9