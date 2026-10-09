import { test, expect } from "@playwright/test";
import { PageObject } from "./page/page";
import * as testData from "./testData.json";

test.describe('Sample Test', () => {
    let pageObject: PageObject;

    test.beforeEach(async ({ browser }) => {
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///D:/Anna/Playwrite-course/tests/workshop_8/index.html');
    })
    
    for(const data of Object.values(testData)){
        if(data.firstName === "Test 1 - Fill Input" || data.testName === "Test 1 - Negative Input"){
            test(data.testName, async() => {
                await pageObject.fillFirstName(data.firstName);
                await pageObject.fillAge(data.age);
                if(data.isStudent){
                    await pageObject.checkIsStudent();
                }
                await pageObject.applyData();

                expect(await pageObject.text('#displayFirstName')).toBe(data.expectedFirstName);
                expect(await pageObject.text('#displayAge')).toBe(data.expectedAge);
                expect(await pageObject.text('#displayIsStudent')).toBe(data.expectedIsStudent);
            })
        }
    }
})
