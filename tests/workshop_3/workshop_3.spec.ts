import {test, expect} from '@playwright/test';

test('Advanced Inteaction', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_3/index.html');
    await page.hover('button#hover-me');
    await page.waitForTimeout(3000);
    expect(await page.textContent('button#hover-me')).toContain('Text Changed!');

    await page.click('button#context-menu',{button:'right'});
    await page.waitForTimeout(3000);
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect (await page.locator('img').count()).toBe(1);
    await page.waitForTimeout(3000);
})

test('Drag and Drop', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_3/index.html');
    // await page.dragAndDrop('.drag-source','.drop-target');
    // await page.waitForTimeout(3000);
    // expect(await page.textContent('.drop-target')).toContain('Success');
    // await page.waitForTimeout(3000);

    await page.locator('.drag-source').hover();
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    expect(await page.textContent('.drop-target')).toContain('Success');
    await page.waitForTimeout(3000);
})

test('Handling iFrame', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_3/index.html');
    const iFrameElement=page.frame({name: 'iframeName'});
    const inputSelector='#iframe-input';
    await iFrameElement.type(inputSelector,'Hello Playwright!');
    if(iFrameElement){
    expect (await iFrameElement.locator(inputSelector).inputValue()).toContain('Hello Playwright!');
    } else {
    console.log('iFrame not found');
    }
    await page.waitForTimeout(3000);
})