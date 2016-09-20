//reference https://github.com/jls/nightwatch-html-reporter/
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    //openBrowser: true -- for local env, to get report opened once test run is over
    openBrowser: false,
    //reference https://github.com/jls/nightwatch-html-reporter/tree/master/lib/themes
    themeName: 'default',
    //where our report goes
    reportsDirectory:'./reports',
    //report's name
    reportFilename: 'admin_automation_report.html',
    //we see all successful and failed tests in report
    hideSuccess: false
});
module.exports = {
    //plug-in this custom reporter to default one
    reporter: reporter.fn
};