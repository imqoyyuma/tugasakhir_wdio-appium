const path = require("path");

exports.config = {
    runner: "local",
    port: 4725,
    specs: ["./test/specs/mobileautomation.js"],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "13.0",
            "appium:deviceName": "Xiaomi 12X",
            "appium:automationName": "UiAutomator2",
            "appium:app": path.join(process.cwd(), "./test/apk/Diet_meal.apk"),
            "appium:appPackage": "com.fghilmany.dietmealapp",
            "appium:appActivity": ".ui.main.MainActivity",
            "appium:noReset": true,
            "appium:forceAppLaunch": true,
        },
    ],
    logLevel: "info",
    bail: 0,
    baseUrl: "http://127.0.0.1",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ["appium"],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
