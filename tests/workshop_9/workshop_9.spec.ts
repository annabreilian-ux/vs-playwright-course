import {test, expect} from "@playwright/test";


test('Automation From Submission @githubaction', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('John Doe');  
    await newTodo.press('Enter');
    await newTodo.fill('Jane Doe');
    await newTodo.press('Enter');

    const firstTodo = page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();
    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass('completed');
})

test.only('Handling Form @githubaction', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.fill('[placeholder="What needs to be done?"]', 'John Doe');
    await page.press('[placeholder="What needs to be done?"]', 'Enter');
    
    const checkbox = page.locator('.toggle');
    await checkbox.check();
})