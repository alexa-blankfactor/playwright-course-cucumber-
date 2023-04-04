const reporter = require('cucumber-html-reporter')

const options={
    theme:'bootstrap',
    jsonFile:'cucumber_report.json',
    output:'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata:{
        'App version':'2.0.0',
        'Test Enviroment':'STAGING',
        Browser:'Chrome',
        Platform: 'Windows 10'
    }
}

reporter.generate(options)