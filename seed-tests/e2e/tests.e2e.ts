import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { isSauceLab } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "mocha";

const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;

describe("sample scenario", () => {
    let driver: AppiumDriver;

    before(async function() {
        nsCapabilities.testReporter.context = this;
        driver = await createDriver();
        driver.defaultWaitTime = 20000;
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
    });

    after(async function () {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Driver successfully quit");
    });

    afterEach(async function () {
        if (this.currentTest.state && this.currentTest.state === "failed") {
            let png = await driver.logScreenshot(this.currentTest.title);
            fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                if (err) {
                    throw err;
                }
                console.log('Screenshot saved.');
            });
            addContext(this, './' + this.currentTest.title + '.png');
        }
    });

    it("should find an element by text", async function () {
        const alertTitle = await driver.findElementByText("Alert", SearchOptions.contains);
        expect(alertTitle).to.exist;

        const okBtn = await driver.findElementByText("OK", SearchOptions.contains);
        await okBtn.click();
    });
});