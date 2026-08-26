import {test, expect} from '@playwright/test';

test('Open new window and navigate back', async({context, page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_5/index.html');
    await page.click('#openNewWindow');
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    expect(newPage.getByRole('heading', { name: 'Welcome to the New Page' })).toBeVisible();
    await page.waitForTimeout(3000);
})

test('Add Cookie', async ({page})=>{
    await page.goto('http://localhost:8080/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('http://localhost:8080/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',sessionCookie);
    expect(sessionCookie).toBeDefined();
})

test('Delete Cookie', async({page})=>{
    await page.goto('file:///D:/Anna/Playwrite-course/tests/Workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = page.context().cookies('file:///D:/Anna/Playwrite-course/tests/Workshop_5/index.html');
    const sessionCookie = (await cookies).find(cookie => cookie.name === 'session');
    console.log('Session Cookie:', sessionCookie);
    
    await page.click('#deleteCookie');
    const deleteCookies = page.context().cookies('file:///D:/Anna/Playwrite-course/tests/Workshop_5/index.html');
    const deletedSessionCookie = (await cookies).find(cookie => cookie.name === 'session');
    expect(deletedSessionCookie).toBeUndefined();
    console.log('Session Cookie Deleted:', deletedSessionCookie);
    await page.waitForTimeout(3000);
})