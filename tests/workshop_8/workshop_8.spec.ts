import { test, expect } from "@playwright/test";
import { PageObject } from "./page/page";

test.describe('Sample Test', () => {
    let pageObject: PageObject;

    test.beforeEach(async ({ browser }) => {
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///D:/Anna/Playwrite-course/tests/workshop_8/index.html');
    })
    
    test('Test 1, Fill all inputs', async ({ page }) => {
        await pageObject.fillFirstName('John');
        await pageObject.fillAge('30');
        await pageObject.checkIsStudent();
        await pageObject.applyData();

        expect(await pageObject.text('#displayFirstName')).toBe('John');
        expect(await pageObject.text('#displayAge')).toBe('30');
        expect(await pageObject.text('#displayIsStudent')).toBe('Yes');
    })
})
