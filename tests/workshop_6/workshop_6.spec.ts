import {test, expect} from '@playwright/test';

const testData = {
    Name: 'John',
    LastName: 'Doe',
    Address: '123 Main St',
    Number: '555-1234'
}

test.describe('UserRegistration Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('file:///D:/Anna/Playwrite-course/tests/workshop_6/index.html');
    });
    test('Register with valid data', async ({ page }) => {
        await page.fill('#firstName', testData.Name);
        await page.fill('#lastName', testData.LastName);
        await page.fill('#address', testData.Address);
        await page.fill('#number', testData.Number);
        await page.click('#register');

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addressText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();

        expect(firstNameText).toEqual(testData.Name);
        expect(lastNameText).toEqual(testData.LastName);
        expect(addressText).toEqual(testData.Address);
        expect(numberText).toEqual (testData.Number);
    });
    test('Register with empty fields', async ({ page }) => {
        await page.click('#register');
        await page.fill('#firstName', testData.Name);
        await page.fill('#lastName', testData.LastName);
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.');
    });
    test('Register with all empty fields', async ({ page }) => {
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.');
    });
});