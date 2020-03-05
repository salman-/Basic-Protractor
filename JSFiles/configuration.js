"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs: ['../features/calculator.feature'],
    capabilities: {
        browserName: 'chrome'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFVyxRQUFBLE1BQU0sR0FBVTtJQUN2QixlQUFlLEVBQUUsOEJBQThCO0lBQy9DLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDO0lBQ3pDLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBQyxRQUFRO0tBQ3ZCO0NBRUYsQ0FBQyJ9