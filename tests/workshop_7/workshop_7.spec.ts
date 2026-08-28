import {test, expect} from '@playwright/test';

test.describe('Variable Declaration and Types', async()=>{
    const selectors = {
        firstName: '#firstName',
        age: '#age',
        isStudent: '#isStudent'
    }
    test('Declaration and Types', async ({ page }) => {
        await page.goto('file:///D:/Anna/Playwrite-course/tests/workshop_7/index.html');
        let firstName: string = 'John';
        let age: number = 30;
        let isStudent: boolean = false;
        await page.fill(selectors.firstName, firstName);
        await page.fill(selectors.age, age.toString());
        await page.check(selectors.isStudent);
        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(firstName);
        expect(await page.textContent('#displayAge')).toContain(age.toString());
        expect(await page.isChecked('#isStudent')).toBe(true);
    })

});

test.describe('Type Definitions and Interfaces', async()=>{
        type User = {
            firstName: string;
            age: number;
            isStudent: boolean;
        }
        let user: User = {
            firstName: 'Alice',
            age: 25,
            isStudent: true
        }
    test('Type Def and Interfaces', async ({ page }) => {
        await page.goto('file:///D:/Anna/Playwrite-course/tests/workshop_7/index.html');
        await page.fill('#firstName', user.firstName);
        await page.fill('#age', user.age.toString());
        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
        expect(await page.textContent('#displayAge')).toContain(user.age.toString());
        expect(await page.isChecked('#isStudent')).not.toBe(user.isStudent);

    })
})
