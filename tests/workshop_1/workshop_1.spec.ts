import {test} from 'playwright/test';

test.skip('Basic Navigation', async({page})=>{
await page.goto('https://gitlab.com/');
await page.waitForTimeout(3000);
await page.reload();   
})

test.skip( 'Interacting with Web Element on GitLab', async({page})=>{
await page.goto('https://gitlab.com/');
await page.click('#onetrust-accept-btn-handler');
await page.locator('div.navigation__actions').getByRole('link', {name: 'Get free trial'}).click(); 
// await page.locator('[data-testid="new-user-first-name-field"]').fill('John1');
// await page.locator('[data-testid="new-user-last-name-field"]').fill('Doe1');
await page.getByTestId('new-user-first-name-field').fill('John1');
await page.getByTestId('new-user-last-name-field').fill('Doe1');
})

test('Using Various Locator Metod', async({page})=>{
await page.goto('https://gitlab.com/');
await page.click('#onetrust-accept-btn-handler');//cookie btn click
//await page.getByRole('button',{name:'Main Menu'}).click();
//await page.getByRole('link',{name:'sign in'}).click();
await page.click(':has-text("Sign in")');
})