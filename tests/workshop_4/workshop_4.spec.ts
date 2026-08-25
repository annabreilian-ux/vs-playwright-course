import {test, expect} from '@playwright/test';

test('Handling Alerts', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_4/index.html');
    let alertMessage = '';
    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        expect(dialog.type()).toBe('alert');
        await page.waitForTimeout(4000);
        await dialog.accept();   
    })
    await page.click('#show-alert');
    expect(alertMessage).toBe('This is a simple alert.');
    await page.waitForTimeout(3000);
})

test ('Handling Confirm', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_4/index.html');
    let alertMessage = '';
    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        await page.waitForTimeout(4000);
        await dialog.dismiss();   
    })
    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
    await page.waitForTimeout(3000);
})

test ('Handling POP_UPs', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup')
    ]);
    await popup.waitForLoadState();

    await popup.close();
    await page.waitForTimeout(3000);
})