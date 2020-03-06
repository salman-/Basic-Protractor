"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs: ['../features/calculator.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: [
            './stepDefinitions/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRVcsUUFBQSxNQUFNLEdBQVU7SUFFdkIsU0FBUyxFQUFDLFFBQVE7SUFFbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsYUFBYSxFQUFDLElBQUk7SUFFbEIsS0FBSyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7SUFFekMsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFDLFFBQVE7S0FDdkI7SUFFRCxZQUFZLEVBQUU7UUFFVixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FDekI7S0FDRjtDQUVKLENBQUMifQ==