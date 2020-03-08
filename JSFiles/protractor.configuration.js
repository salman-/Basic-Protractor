"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs: ['../features/calculator.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        format: 'json:./reports/cucumberReport.json',
        require: [
            './stepDefinitions/*.js'
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumberReport.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLGlFQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVTtJQUV2QixTQUFTLEVBQUMsUUFBUTtJQUVsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxhQUFhLEVBQUMsSUFBSTtJQUVsQixLQUFLLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUV6QyxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUMsUUFBUTtLQUN2QjtJQUVELFlBQVksRUFBRTtRQUVWLE1BQU0sRUFBQyxvQ0FBb0M7UUFFM0MsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCO1NBQ3pCO0tBQ0Y7SUFDRCxVQUFVLEVBQUMsR0FBRSxFQUFFO1FBRWIsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNCLENBQUM7Q0FFSixDQUFDIn0=