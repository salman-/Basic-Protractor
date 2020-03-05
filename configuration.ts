import {Config} from 'protractor';

export let config:Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect:true,
    specs: ['../features/calculator.feature'],
    capabilities: {
        browserName:'chrome'
    }

  };