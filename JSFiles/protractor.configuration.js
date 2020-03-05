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
    },
    cucumberOpts: {
        require: [
            './stepDefinitions/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRVcsUUFBQSxNQUFNLEdBQVU7SUFDdkIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxTQUFTLEVBQUMsUUFBUTtJQUVsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxhQUFhLEVBQUMsSUFBSTtJQUVsQixLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUV6QyxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUMsUUFBUTtLQUN2QjtJQUVELFlBQVksRUFBRTtRQUVWLE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUN6QjtLQUNGO0NBRUosQ0FBQyJ9